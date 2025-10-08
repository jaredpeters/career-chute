# 🚀 Deployment Guide

## Quick Deploy Checklist

Before deploying to Netlify:

1. ✅ **Update version number** in `index.html`:
   ```javascript
   const APP_VERSION = '3.1.X'; // Increment this
   const APP_BUILD_DATE = 'YYYY-MM-DD'; // Today's date
   ```

2. ✅ **Update `CHANGELOG.md`** with changes

3. ✅ **Commit changes** to git:
   ```bash
   git add .
   git commit -m "v3.1.0: Parser improvements + validation system"
   git push
   ```

4. ✅ **Netlify auto-deploys** (or manual deploy if needed)

5. ✅ **Verify deployment**:
   - Open app URL
   - Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
   - Go to Settings
   - Check version shows: `v3.1.0`

6. ✅ **Reconnect Gmail** (tokens expire on new deploy)

---

## Version Number Guide

### When to increment:

**Patch (3.1.0 → 3.1.1)**
- Bug fixes
- Small tweaks
- Documentation updates

**Minor (3.1.0 → 3.2.0)**
- New features
- Major improvements
- New integrations

**Major (3.1.0 → 4.0.0)**
- Complete rewrites
- Breaking changes
- Major redesigns

---

## Deployment Methods

### Method 1: Git Push (Recommended)
```bash
# After making changes
git add .
git commit -m "v3.1.1: Fixed parser bug"
git push origin main
```
Netlify auto-deploys from your GitHub repo.

### Method 2: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Method 3: Netlify Dashboard
1. Drag & drop `index.html` to Netlify
2. Manual deploy

---

## Post-Deployment

### What Happens:
1. **Browser cache** - Users need hard refresh
2. **Gmail tokens** - Expire, need reconnection
3. **Firebase** - Data persists (no issues)
4. **LocalStorage** - Persists (no issues)

### User Experience:
```
User opens app after deploy
  ↓
Old cached version loads
  ↓
Hard refresh (Cmd+Shift+R)
  ↓
New version loads (v3.1.0 shows)
  ↓
Go to Gmail Integration
  ↓
Click "Connect Gmail" (token expired)
  ↓
Ready to scan!
```

---

## Gmail Session Management

### Why Sessions Expire on Deploy

**Technical Reason:**
- Access tokens stored in JavaScript memory
- New deploy = new JavaScript = fresh memory
- Token is gone (but can be refreshed)

**User Impact:**
- Must click "Connect Gmail" after each deploy
- Takes 2 seconds
- No data loss

**Auto-Refresh During Session:**
- Tokens auto-refresh every 55 minutes
- Only need to reconnect after deploy
- Stays connected during active use

### Token Lifecycle:
```
Deploy → Connect Gmail → Token valid 60min
   ↓
Auto-refresh at 55min → Token valid 60min
   ↓
Auto-refresh at 55min → Token valid 60min
   ↓
(continues indefinitely)
   ↓
NEW DEPLOY → Need to reconnect
```

---

## Troubleshooting

### "Version not updating"
**Problem:** Browser showing old version  
**Solution:** Hard refresh (Cmd+Shift+R)  
**Check:** Open Settings, look for version number

### "Gmail won't connect"
**Problem:** Token expired after deploy  
**Solution:** Click "Connect Gmail" button  
**Check:** Should see "Connected as you@gmail.com"

### "No jobs being imported"
**Problem:** Parser rejecting everything  
**Solution:** 
1. Open console (F12)
2. Run: `viewRejectedListings()`
3. Check rejection reasons
4. Report issues if needed

### "Netlify not deploying"
**Problem:** Changes not appearing  
**Check:**
1. Git committed and pushed?
2. Netlify build logs (check for errors)
3. Branch is `main` (or whatever Netlify watches)

---

## Version Display

Users can check their version in **Settings**:

```
v3.1.0 • Build: 2025-10-08 • ✓ Up to date
```

Also shown in console:
```javascript
🚀 Career Chute v3.1.0 (2025-10-08)
```

---

## Release Process

### 1. Development
```bash
# Make changes
# Test locally
# Update version in index.html
```

### 2. Documentation
```bash
# Update CHANGELOG.md
# Add notes about breaking changes
```

### 3. Commit & Push
```bash
git add .
git commit -m "v3.1.1: Description of changes"
git push origin main
```

### 4. Netlify Deploy
- Automatic if GitHub connected
- Check Netlify dashboard for build status
- Usually takes 1-2 minutes

### 5. Verification
```bash
# Open app URL
# Hard refresh
# Check Settings → Version
# Test new features
# Reconnect Gmail if needed
```

### 6. Notify Users (Optional)
```
"🚀 v3.1.1 deployed!
- Fixed parser bug with LinkedIn emails
- Improved location extraction
- Refresh page (Cmd+Shift+R) and reconnect Gmail"
```

---

## Current Version

**v3.1.0** - 2025-10-08

### Highlights:
- Intelligent email parser
- Validation system
- Multi-listing support
- Confidence scoring
- Gmail auto-refresh

### Breaking Changes:
None - fully backwards compatible

### Migration Notes:
- No data migration needed
- Existing jobs preserved
- New validation only applies to new scans

---

## Quick Commands

### Check Current Version
```javascript
console.log(APP_VERSION); // In browser console
```

### View Rejected Listings
```javascript
viewRejectedListings(); // After scanning Gmail
```

### Force Refresh
```
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows/Linux)
```

---

**Need help?** Check console logs or reach out!
