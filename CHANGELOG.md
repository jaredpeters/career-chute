# Changelog

All notable changes to Career Chute will be documented in this file.

---

## [3.2.2] - 2025-10-08

### 🔄 MIGRATION
- **Auto-migrate Client ID**: Existing Gmail Client ID automatically copied to Google section
- **Seamless Transition**: No need to re-enter your Google Client ID
- **Backward Compatibility**: Preserves your existing configuration

## [3.2.1] - 2025-10-08

### 🔐 ADDED
- **Google OAuth for Sheets**: Separate authentication for Google Sheets sync
- **Google Auth UI**: Clean interface to configure Google Client ID
- **Sheets-Only OAuth**: No longer requires Gmail connection for Sheets
- **Auth Status Display**: Shows connection status and configuration steps

### 🛠️ FIXED
- **Sheets Dependency**: Removed Gmail requirement for Google Sheets sync
- **OAuth Scope**: Limited to spreadsheets only (more secure)
- **UI Integration**: Google auth section in settings page

## [3.2.0] - 2025-10-08

### 🧹 Major Cleanup
- **ARCHIVED Email Parsing System** - Removed unreliable Gmail integration
  - HTML structure too unpredictable
  - Extracted garbage data ("style=", "target=", etc.)
  - Rejection rate: 157/165 listings
  - See `archived/EMAIL_PARSING_CODE_ARCHIVE.md` for details

### ✅ What's Kept
- Manual job entry (fast and reliable)
- Google Sheets sync (still useful!)
- Applications Pipeline (core feature)
- Priority grading system
- Time blocking
- Focus mode

### 🗑️ Removed
- Gmail integration UI
- Email parsing functions (~500 lines)
- Job Queue tab from navigation
- Mapping tab from navigation  
- Validation system
- Confidence scoring UI
- All parser documentation (moved to /archived/)

### 🚀 Benefits
- Cleaner codebase
- Faster page load
- Less complexity
- Focus on manual workflow that actually works

### 💡 Future
- Consider Safari extension for direct DOM access
- Would parse actual job pages, not mangled email HTML
- More reliable than email parsing ever could be

---

## [3.1.1] - 2025-10-08

### 🔧 Bug Fixes
- **LinkedIn Extraction** - Improved company name extraction patterns
  - More flexible regex patterns (6 different strategies)
  - Wider container search depth (8 levels vs 5)
  - LinkedIn-specific patterns for quotes and multi-line text
  - Better filtering of non-company text

- **Firebase Error** - Fixed RegExp serialization error
  - Exclude `emailParsers` from Firebase save (contains RegExp objects)
  - No longer crashes on save with "Unsupported field value" error

### 📊 Debug Improvements
- Added detailed console logging for extraction process
  - `📝 Container text preview` - See HTML structure being parsed
  - `✅ Found company:` - Track successful extractions
  - `📦 Extracted:` - See final result before validation
  - Helps diagnose parsing issues

### 🧪 Testing
- Run `viewRejectedListings()` in console after scan
- Check company extraction success rate
- Report any persistent "No company name found" errors

---

## [3.1.0] - 2025-10-08

### 🎯 Major Features
- **Intelligent Email Parser** - Complete rebuild with validation system
  - HTML structure parsing (finds real job blocks, not marketing text)
  - Multi-listing support (extracts 2-5 jobs per email)
  - Strict validation (rejects "Phil your career advisor" type garbage)
  - Blacklist/whitelist system for companies and roles
  - URL validation (no more image links)
  - Location truncation detection

- **Parser Quality Control**
  - `isValidListing()` - Validates before importing
  - `extractJobListingsFromHTML()` - Structure-based extraction
  - `viewRejectedListings()` - Debug tool in console
  - Rejection tracking with detailed reasons

- **Confidence Scoring System** (JobSpy-inspired)
  - Per-field confidence (high/medium/low/none)
  - Structured salary parsing (min/max/interval/currency)
  - Structured location parsing (city/state/country/remote)
  - Visual confidence indicators (🟢🟡🔴⚪)

### 🔧 Fixes
- Gmail session token auto-refresh (no more hourly expiry)
- Token countdown display in UI
- Better HTML/text body handling

### 📊 Statistics
- Added: rejected count in scan results
- Better breakdown of skipped vs rejected jobs
- Console logging with emojis (📧 🔍 ✅ ❌)

### 📚 Documentation
- `PARSER_IMPROVEMENTS.md` - Full technical details
- `PARSER_QUICK_REFERENCE.md` - Quick guide
- `GMAIL_SESSION_FIX.md` - Token management explanation
- `PARSING_ENHANCEMENTS.md` - Confidence scoring system

---

## [3.0.0] - 2025-10-07

### Features
- Gmail job alert integration
- Email field mapping system
- Job prioritization with role/city grading
- Employer and city blocking
- Google Sheets sync
- Parser training system

---

## Version Numbering

We use [Semantic Versioning](https://semver.org/):

**MAJOR.MINOR.PATCH** (e.g., 3.1.0)

- **MAJOR**: Breaking changes or complete rebuilds
- **MINOR**: New features, backwards-compatible
- **PATCH**: Bug fixes, small improvements

### When to Bump:

- **Major (3.x.x → 4.0.0)**: 
  - Complete UI redesign
  - Database schema changes
  - Breaking API changes

- **Minor (3.0.x → 3.1.0)**:
  - New parser features
  - New integration (Sheets, Gmail)
  - Major algorithm improvements

- **Patch (3.1.0 → 3.1.1)**:
  - Bug fixes
  - Small UI tweaks
  - Performance improvements
  - Documentation updates

---

## How to Check Your Version

1. Go to **Settings** page
2. Look at top: `v3.1.0 • Build: 2025-10-08`
3. Or check console: `🚀 Career Chute v3.1.0 (2025-10-08)`

---

## Deployment Notes

### Gmail Session Behavior
**Q: Why does Gmail session expire after deploy?**

A: This is **normal** behavior:
- Access tokens are stored in browser memory
- New code = fresh JavaScript execution
- Token is still valid, but needs to be reconnected
- Solution: Just click "Connect Gmail" again after each deploy

**Token Auto-Refresh:**
- Tokens auto-refresh 5 minutes before expiry
- You'll see countdown in status: `(token valid for 58m)`
- Should stay connected indefinitely during active use

---

## Next Release Preview

### [3.2.0] - Planned Features
- Interactive parser training UI
- Smart location auto-completion
- Salary range filtering
- Remote-only job filter
- Pattern learning system

### [3.1.1] - Bug Fixes (if needed)
- Parser edge cases
- LinkedIn specific formats
- Location parsing improvements
