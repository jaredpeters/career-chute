# 🚀 Parser Quick Reference

## TL;DR - What Changed

✅ **No more garbage listings** - "Phil your career advisor" won't be imported  
✅ **HTML structure parsing** - Finds actual job blocks in emails  
✅ **Multi-listing support** - Gets 2-3 jobs from emails that have them  
✅ **Strict validation** - Rejects marketing fluff automatically  
✅ **Debug tools** - See exactly what was rejected and why  

---

## How to Test

### 1. Scan Gmail
```
Open app → Gmail Integration → Scan for Jobs Now
```

### 2. Check Results
```
✅ Scan Complete!
📥 Added: 5 new jobs
❌ Rejected: 3 (invalid listings) ← NEW!
```

### 3. View Rejected (Console)
```javascript
viewRejectedListings()
```

---

## Validation Rules

### ❌ Will Be Rejected:

**Company names containing:**
- career advisor, coach, recruiter team
- phil, zippy, indeed assist (AI mascots)
- unsubscribe, click here, view all

**Role titles containing:**
- think this job, might be right, new jobs
- hi, hello, hey (greetings)
- unsubscribe, click here, view details

**Role titles NOT containing:**
- Must have: engineer, developer, manager, analyst, designer, etc.
- (see full list in `PARSER_IMPROVEMENTS.md`)

**URLs that are:**
- Image files (.jpg, .png, .gif)
- Unsubscribe/settings links

---

## Console Commands

```javascript
// View all rejected listings with reasons
viewRejectedListings()

// Export rejected data as JSON
copy(window._rejectedListings)

// Check raw data
window._rejectedListings
```

---

## What to Expect

### Quality vs Quantity:
- **Before:** 20 imports, 10 garbage
- **After:** 10 imports, all real

### Rejection Rate:
- 20-40% rejection is NORMAL
- This means filtering is working!

### Console Logs:
```
📧 Parsing email from: phil@ziprecruiter.com
🔍 Attempting HTML structure extraction...
✅ Found 3 listings via HTML extraction
✅ Valid listing found via HTML extraction
```

or

```
❌ REJECTED: Listing failed validation
   Company: Unknown
   Role: Phil your career advisor
   Reasons: Role doesn't contain job-related terms
```

---

## Your Example - Fixed!

### Before (Garbage):
```
Company: Amtec Contract
Role: Phil your career advisor ❌
Location: Clarita, CA ❌
Salary: $20-$30 ❓
```

### After (Quality):
```
Email has 1 actual listing:
  Company: Amtec Inc ✅
  Role: Hydraulics Assembler ✅
  Location: Santa Clarita, CA ✅
  Salary: $20-$30/hour ✅
  URL: [actual job link] ✅

"Phil your career advisor" → REJECTED ✅
Reason: Role doesn't contain job-related terms
```

---

## Need Help?

1. Read `PARSER_IMPROVEMENTS.md` for full details
2. Run `viewRejectedListings()` to see what was filtered
3. Check console for emoji logs (📧 🔍 ✅ ❌)

---

**Result:** No more frankensteined listings! 🎉
