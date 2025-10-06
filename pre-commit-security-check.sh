#!/bin/bash

# Career Chute Security Pre-commit Hook
# This script checks for sensitive data before allowing commits

echo "🔍 Running security check..."

# Check for hardcoded API keys, tokens, and secrets
SECRETS_FOUND=0

# Check for dangerous patterns (excluding safe Firebase public keys and legitimate code)
DANGEROUS_PATTERNS=(
    "sk-[a-zA-Z0-9]{48}"  # OpenAI API keys
    "pk_[a-zA-Z0-9]{24}"  # Stripe public keys (if private)
    "rk_[a-zA-Z0-9]{24}"  # Stripe restricted keys
    "GOCSPX-[a-zA-Z0-9_-]{40}"  # Google OAuth client secrets
    "BEGIN PRIVATE KEY"  # Private keys
    "BEGIN RSA PRIVATE KEY"  # RSA private keys
    "ghp_[a-zA-Z0-9]{36}"  # GitHub personal access tokens
    "gho_[a-zA-Z0-9]{36}"  # GitHub OAuth tokens
    "ghu_[a-zA-Z0-9]{36}"  # GitHub user tokens
    "ghs_[a-zA-Z0-9]{36}"  # GitHub server tokens
    "ghr_[a-zA-Z0-9]{36}"  # GitHub refresh tokens
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
    if grep -r -E "$pattern" . --exclude-dir=.git --exclude="*.md" --exclude="pre-commit-security-check.sh" --exclude=".cursorrules.md"; then
        echo "❌ SECURITY VIOLATION: Dangerous pattern '$pattern' found!"
        SECRETS_FOUND=1
    fi
done

# Check for hardcoded secrets in variable assignments (excluding safe Firebase config)
if grep -r -E "(apiKey|secret|password|token).*=.*[\"'][^\"']{20,}" . --exclude-dir=.git --exclude="*.md" --exclude="pre-commit-security-check.sh" --exclude=".cursorrules.md" | grep -v "AIzaSy.*firebase\|accessToken.*null\|tokenExpiry.*null"; then
    echo "❌ SECURITY VIOLATION: Hardcoded secrets in variable assignments!"
    SECRETS_FOUND=1
fi

# Additional checks are already covered by the dangerous patterns above

if [ $SECRETS_FOUND -eq 1 ]; then
    echo ""
    echo "🚨 COMMIT BLOCKED: Remove sensitive data before committing!"
    echo "💡 Use environment variables or user input instead of hardcoded values"
    echo "📖 See .cursorrules.md for security guidelines"
    exit 1
else
    echo "✅ Security check passed - no sensitive data found"
    exit 0
fi
