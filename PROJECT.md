# Career Chute 3.0 - Project Management Document

## 🎯 Vision
A flow-state job search app that guides users through their day with minimal decision fatigue. MacBook primary, iPhone-friendly. Focus on execution over planning paralysis. **NOW WITH CLOUD SYNC!**

## 📋 Project Phases

### ✅ Phase 1: Core Rebuild (COMPLETED ✓✓)
**Goal:** Get a working app with Focus Mode ASAP
**Status:** Complete with enhancements!

**Core Features:**
- [x] Full-width task cards (restaurant POS style)
- [x] Focus Mode with timer and clear completion criteria
- [x] "Start Your Day" flow with task selection
- [x] Three-option task completion (Recommended | Random | Choose manually)
- [x] Daily standup ritual (morning coffee graphics)
- [x] Auto-calculated daily quotas
- [x] Deadline tracking and sorting
- [x] Mobile-responsive (iPhone 14 Pro Max optimized)
- [x] LocalStorage (works immediately)

**Mission Control & Orientation:**
- [x] Mission Control Dashboard - Bird's eye view of week progress
- [x] Role Focus Tracker - Keep oriented on target roles
- [x] Guardrails System - Toggleable time limits and warnings
- [x] Time Tracking - Optimization vs Execution time breakdown
- [x] On-track Status - Visual indicator if behind/on track/ahead

**NEW - Motivation & Flow Enhancements:**
- [x] **Pause & Switch Task** - Save progress, resume later
- [x] **Accumulative time tracking** - Tasks remember time across sessions
- [x] **Progress bars in Focus Mode** - See X/40 min for optimization tasks
- [x] **Celebration animations** - Confetti on task completion
- [x] **Streak tracking** - Days in a row completing tasks
- [x] **Milestone system** - 1st app, 5 apps, 10 apps, weekly goals, streaks
- [x] **Box breathing transition** - 4-7-8 breathing between tasks (skippable)
- [x] **Smooth animations** - Slide-ins, glow effects, polish

**Application Pipeline:** Multi-stage tracking
- Queued → Tailoring → Ready to Send → Sent → Follow-up

### ✅ Phase 2: Firebase Sync (COMPLETED ✓✓)
**Goal:** Cross-device synchronization
**Status:** ✨ **COMPLETE!** ✨

**Technical Implementation:**
- [x] Firebase project created (`career-chute-b0be0`)
- [x] Firestore database enabled (test mode)
- [x] Real-time sync between devices
- [x] Unique user ID system (no authentication required yet)
- [x] Automatic sync with visual status indicator
- [x] Offline support (localStorage fallback)
- [x] Conflict-free updates via Firestore listeners
- [x] Netlify deployment configured and live

**New Features Added:**
- [x] **Cloud sync indicator** - Shows "Syncing...", "Synced", "Cloud" status
- [x] **Real-time updates** - Changes appear instantly across devices
- [x] **User ID display** - View your unique ID in Settings
- [x] **Delete functionality** - Remove apps/contacts (with cascade delete of tasks)
- [x] **Data export/import** - Backup and restore as JSON
- [x] **Reset all data** - Fresh start option (requires "DELETE ALL" confirmation)
- [x] **Improved empty states** - Better UX when no items exist
- [x] **Auto-save** - Changes sync immediately without manual save

**Simplified Architecture:**
- No authentication yet (anonymous user IDs)
- Each device gets unique user ID on first load
- Same user ID = same data across devices
- Future: Add Google Sign-In for account-based sync

### ✅ Phase 3: Polish & Enhancement (COMPLETED ✓✓)
**Goal:** Additional quality-of-life features
**Status:** ✨ **COMPLETE!** ✨

**Recently Completed:**
- [x] Delete functionality for apps and contacts
- [x] Better error handling and user feedback
- [x] Improved modal UX
- [x] Data management tools (export/import/reset)
- [x] **Firebase connection robustness** - Timeout handling, graceful fallback to offline mode
- [x] **Tailoring task workflow** - Select existing apps or quick-add with URL, auto-pair with application tasks
- [x] **Focus mode enhancements** - Quick notes textarea, URL editing, paired task switching
- [x] **Contextual quick-add labels** - Dynamic button text based on task type
- [x] **Edit/delete actions** - Queue and pipeline item management with inline editing
- [x] **Event auto-queue** - Events automatically appear in today's queue on their date
- [x] **Event calendar integration** - Calendar URL field in quick-add and pipeline
- [x] **Weekly event status coloring** - Denominator turns green if any event scheduled this week

**NEW - Focus Session Panel (Phase 1 Complete):**
- [x] **Focus Session Panel UI** - Glassmorphic panel above Today's tasks
- [x] **Start Day functionality** - Initialize focus session with goal blocks
- [x] **Block Grid Display** - Visual 6-wide grid showing progress (empty/filled blocks)
- [x] **Block Grid Visualization** - 32x32px squares with flex wrap layout
- [x] **Smooth Fill Animation** - Blocks fill with sweep animation and scale effect
- [x] **Dynamic Grid Updates** - updateBlockGrid() function for real-time changes
- [x] **Chunk Controls** - Duration selector (30/60/90/120 min) and start button
- [x] **Timer Display** - MM:SS countdown timer (32px, tabular-nums)
- [x] **Chunk Timer System** - Full countdown timer with Start/Pause/Finish functionality
- [x] **Timer Persistence** - Timer state saved to Firebase and restored on page load
- [x] **Auto-finish** - Timer automatically completes when reaching zero
- [x] **Visual Feedback** - Timer color changes as time runs low (warn/bad colors)
- [x] **ON/OFF Task Toggle** - Large toggle buttons (ON TASK green, OFF TASK gray)
- [x] **Session Logging** - Logs each mode switch with duration and timestamps
- [x] **Separate Time Tracking** - Tracks on-task and off-task times independently
- [x] **Block Filling Logic** - Only on-task time fills blocks (every 30 minutes)
- [x] **Off-task Time Counter** - Real-time tracking of distractions
- [x] **Goal Achievement** - Celebration animation when daily goal reached
- [x] **State Management** - Complete timeBlocking state structure
- [x] **Firebase Integration** - Persistent focus session data

**Still Planned (Future Phases):**
- [ ] Pomodoro timer integration
- [ ] Break reminders with stretching suggestions
- [ ] Weekly reflection prompts
- [ ] Advanced analytics dashboard
- [ ] Custom motivational messages
- [ ] Sound effects for completions (optional/toggleable)
- [ ] Interview prep task type
- [ ] Notes/follow-up reminders per application

### 🔐 Phase 3.5: Authentication (NEXT PRIORITY)
**Goal:** Account-based sync instead of device-based
**Status:** Planned

**Features:**
- [ ] Google Sign-In integration
- [ ] Link multiple devices to one account
- [ ] Account recovery options
- [ ] Profile management
- [ ] Secure data access (Firestore security rules)

### 📱 Phase 4: Native Mobile (Future)
**Goal:** Full iPhone app experience
**Status:** Future consideration

**Options:**
- Progressive Web App (PWA) - installable
- React Native - true native app
- Swift - iOS only but best performance

## 🐛 Bug Fixes & Improvements Log

### Current Session - Firebase Migration & UX Enhancements
**Changes:**
- ✅ Migrated from localStorage to Firestore
- ✅ Implemented real-time sync across devices
- ✅ Added sync status indicator in top bar
- ✅ Added delete buttons for apps and contacts
- ✅ Improved task selection modal (shows helpful messages when empty)
- ✅ Added data export/import/reset functionality
- ✅ Better error handling throughout
- ✅ User ID display in Settings
- ✅ Color-coded sync status (syncing/synced/error)
- ✅ Cascade delete (removing app/contact also removes related tasks)

### Latest Session - Button Fixes & Workflow Improvements
**Changes:**
- ✅ **Fixed button functionality** - Resolved Firebase connection blocking buttons
- ✅ **Added missing functions** - All modal and action handlers now implemented
- ✅ **Improved Firebase robustness** - 5-second timeout, graceful offline fallback
- ✅ **Enhanced tailoring workflow** - Select existing apps or quick-add with URL
- ✅ **Auto-paired tasks** - Adding application creates tailoring task, vice versa
- ✅ **Focus mode enhancements** - Notes textarea, URL editing, paired task switching
- ✅ **Contextual quick-add** - Dynamic button labels ("+ Quick add contact" vs "+ Quick add application")
- ✅ **Edit/delete actions** - Queue cards and pipeline items now editable/deletable
- ✅ **Event auto-queue** - Events automatically appear in today's queue on their date
- ✅ **Calendar integration** - Calendar URL field in event quick-add and pipeline
- ✅ **Weekly event status** - Denominator colors green if any event scheduled this week
- ✅ **Progress page condensed dashboard** - Replaced legacy layout with grid-based dashboard for higher information density

### Current Session - Mobile Optimization & Cross-Device Sync
**Changes:**
- ✅ **Focus mode mobile fix** - Optimized layout for iPhone 14 Pro Max with proper sizing and scrolling
- ✅ **Mobile responsive improvements** - Fixed content overflow and button layout on mobile devices
- ✅ **iPhone 14 Pro Max specific CSS** - Added targeted media queries for 430px viewport
- ✅ **Cross-device sync testing** - Deployed to Netlify for real-time sync between iPhone and Mac
- ✅ **Enhanced .cursorrules** - Added automatic Git workflow and PROJECT.md sync requirements
- ✅ **Git authentication setup** - Configured Personal Access Token for seamless GitHub integration
- ✅ **Automatic commit workflow** - AI assistant now auto-commits all changes with descriptive messages
- ✅ **PROJECT.md auto-updates** - Documentation stays current with every code change
- ✅ **Deployment preparation** - Ready for Netlify deployment with auto-sync to GitHub

### Previous Session - Pipeline & Data Integrity Fixes
**Changes:**
- ✅ **Fixed application overwriting** - Resolved data corruption when adding applications from plan page
- ✅ **Form field clearing** - All modals now start with blank fields (no pre-filled data from previous entries)
- ✅ **Pipeline separation** - Applications added from plan page stay in pipeline, don't auto-add to today's queue
- ✅ **Paired task logic** - When adding application to today's queue, automatically creates paired tailoring task
- ✅ **Unfinished task carryover** - Unfinished tasks from previous day mark applications as "in-progress" in pipeline
- ✅ **Removed standalone tailoring** - Tailoring tasks can only be created as pairs with applications
- ✅ **Duplicate prevention** - Prevents adding duplicate tasks of same type/ref for same day
- ✅ **Auto-complete pairing** - Completing application task automatically completes its paired tailoring task

### Latest Major Update - UX Restructure
**Changes:**
- ✅ Removed Start tab (redundant morning ritual)
- ✅ Today is now default landing page
- ✅ Renamed Mission Control → Progress
- ✅ Added live stats to Today header (quota, time, streak)
- ✅ Color-coded quota progress (red→orange→yellow→green)
- ✅ Completed tasks now show as slim cards with celebration emojis
- ✅ **Application task merging** - tailoring + submission = one celebration card
- ✅ Sticky "Add Task" button properly positioned
- ✅ Scroll resets to top when switching to Today
- ✅ Application History tracking in Progress tab
- ✅ Time tracking per application (tailoring + applying separately)
- ✅ Tailoring now linked to specific applications
- ✅ Random celebration emojis on completed tasks

### Known Issues Being Monitored
- First-time users need guidance on adding apps/contacts before tasks
- Need better onboarding flow
- Consider adding sample data for new users
- Firestore security rules currently in test mode (need to harden)

### Testing Status & Requirements

**Critical Features Requiring Regular Testing:**
- ✅ **Time Blocking Timer** - Test with actual 30+ minute sessions, verify accuracy
- ✅ **ON/OFF Task Toggle** - Ensure proper time tracking separation
- ✅ **Block Filling Logic** - Verify 30-min blocks fill correctly
- ✅ **Firebase Sync** - Test data persistence across multiple devices
- ✅ **Analytics Calculations** - Verify daily/weekly stats accuracy
- ✅ **Focus Session State** - Test restoration after page reload
- ✅ **Light/Dark Mode** - Check button gradients and readability
- ✅ **Mobile Responsiveness** - iPhone 14 Pro Max viewport testing

**Testing Reminders:**
- Run a full 90-minute focus session to test timer accuracy
- Open app on 2+ devices to verify real-time sync
- Test analytics updates during active focus sessions
- Switch between light/dark modes to check button appearance
- Test on actual iPhone if possible for mobile validation

---

## 🏗️ Technical Architecture

### Current Stack (Phase 2)
- **Frontend:** HTML + Vanilla JavaScript (ES6 modules)
- **Styling:** Custom CSS (dark theme, high contrast)
- **Storage:** Firebase Firestore (cloud database)
- **Sync:** Real-time Firestore listeners
- **Fallback:** localStorage for offline support
- **Responsive:** Mobile-first CSS with breakpoints

### Firebase Configuration
- **Project:** career-chute-b0be0
- **Region:** us-central1
- **Database:** Firestore (test mode)
- **Authentication:** Not yet implemented (using anonymous user IDs)
- **CDN Version:** Firebase JS SDK 10.7.1

### Data Flow
1. User makes change → Update local state
2. Call `saveToFirebase()` → Write to Firestore
3. Firestore triggers `onSnapshot` listener
4. All connected devices receive update instantly
5. UI re-renders with new data

### Offline Handling
- Changes made offline stored in localStorage
- When connection restored, data syncs to Firestore
- Firestore has built-in offline persistence
- Visual indicator shows connection status

---

## 📐 Design Principles

### User Experience
1. **Flow State First:** Minimize decisions during execution
2. **Clear Completion:** Every task has obvious "done" criteria
3. **Gentle Guidance:** App suggests, never demands
4. **Break Stuck Points:** Randomizer for decision paralysis
5. **Visual Clarity:** Restaurant POS-style full-width cards
6. **Instant Sync:** Changes appear immediately across devices

### Visual Design
- Dark theme (existing color scheme)
- High contrast text
- Large touch targets (mobile-friendly)
- Emojis for personality without clutter
- Progress indicators everywhere
- Color coding: Green (on track), Yellow (attention), Red (urgent)
- Sync status: Blue (syncing), Green (synced), Red (error)

### Mobile Optimization
- iPhone 14 Pro Max (430×932 safe area)
- Full-width cards
- Large buttons (minimum 44×44 tap targets)
- Bottom navigation for thumb access
- Minimal scrolling in Focus Mode

---

## 📊 Data Schema

### Firestore Structure
```
users/
  {userId}/
    weekStart: "2025-10-01"
    targets: { apps: 15, net: 10 }
    apps: [ {...}, {...} ]
    contacts: [ {...}, {...} ]
    tasks: { "2025-10-01": [ {...} ], ... }
    weekDone: { apps: 3, net: 2 }
    taskProgress: { "taskId": 15 }
    streak: 5
    lastUpdated: "2025-10-01T10:30:00Z"
```

### User Profile
```javascript
{
  weekStart: "2025-10-01",
  targets: {
    apps: 15,
    net: 10
  },
  streak: 5
}
```

### Applications
```javascript
{
  id: "abc123",
  company: "Acme Corp",
  role: "Product Manager",
  url: "https://..."
}
```

### Networking Contacts
```javascript
{
  id: "def456",
  name: "Walter",
  rel: "Friend/Ally" | "Professional Contact" | "Recruiter"
}
```

### Daily Tasks
```javascript
{
  "2025-10-01": [
    {
      id: "ghi789",
      type: "application" | "networking" | "tailoring",
      ref: "abc123", // links to app/contact
      done: false,
      time: 0
    }
  ]
}
```

### Task Progress (In-progress tasks)
```javascript
{
  "taskId": 15 // minutes spent so far
}
```

---

## 🎮 Focus Mode Behavior

### Entry
1. User clicks task card from Today's Queue
2. Full-screen Focus Mode activates
3. Timer starts automatically
4. Task details fill screen (restaurant POS style)

### During Task
- **Top:** Timer (counting up from saved progress)
- **Center:** Task description and details
- **Bottom:** "⏸️ Pause" and "✓ Done" buttons (always visible)
- **Exit:** "← Back" link (top-left)

### Progress Tracking
- Time accumulates across sessions
- Pause saves progress to Firebase
- Resume continues from last saved time
- Completion saves total time to task

### Completion
- Task marked done
- Time recorded
- Weekly counters updated
- Streak incremented
- Synced to all devices instantly

---

## 🎯 Success Metrics

### Completion Tracking
- Daily task completion rate
- Weekly target achievement
- Average time per task type
- Streaks (consecutive days active)
- Total applications submitted
- Total networking contacts made

### Sync Health
- Sync success rate
- Average sync latency
- Offline usage patterns
- Multi-device adoption

---

## 🚀 Launch Checklist

### Phase 1 MVP ✅
- [x] All core features working
- [x] Mobile responsive tested on iPhone
- [x] Data persists between sessions
- [x] No critical bugs
- [x] User can complete full day workflow

### Phase 2 Sync ✅
- [x] Firebase account created
- [x] Firestore enabled
- [x] Data syncs in real-time
- [x] Sync tested on 2+ devices
- [x] Offline mode works
- [x] Visual sync indicator

### Phase 3 Enhancement ✅
- [x] Delete functionality
- [x] Data export/import
- [x] Reset all data
- [x] **Button functionality fixes** - All modals and actions working
- [x] **Firebase robustness** - Timeout handling and offline fallback
- [x] **Tailoring workflow** - Selection/quick-add with URL, auto-paired tasks
- [x] **Focus mode enhancements** - Notes, URL editing, paired switching
- [x] **Edit/delete actions** - Queue and pipeline management
- [x] **Event auto-queue** - Automatic today's queue population
- [x] **Calendar integration** - Event calendar URL support
- [x] **Status coloring** - Weekly event denominator color coding

### Phase 3.5 Authentication (Next)
- [ ] Google Sign-In setup
- [ ] User account creation
- [ ] Firestore security rules
- [ ] Account recovery
- [ ] Multi-device management UI

---

## Phase 3.6: Gmail Job Alert Integration (NEXT)

Goal: Auto-scan Gmail for job alerts from Indeed/LinkedIn and add to pipeline

Features:
- Gmail OAuth integration
- Scan last 3 days of unread job alerts
- Parse job details from email HTML (no external scraping needed)
- Extract: title, company, location, salary, URL
- Smart deduplication by URL
- Auto-add to pipeline with new status "queued"
- Manual "Scan Now" button (no auto-scheduling yet)
- Runs in browser (no backend needed for Phase 1)

New Application Fields:
- location (string, optional)
- salary (string, optional)  
- source ('manual' | 'indeed' | 'linkedin')
- addedVia ('manual' | 'email_scan')

Email Sources Monitored:
- jobalerts-noreply@linkedin.com
- noreply@indeed.com

Technical Approach:
- Gmail API with OAuth (gmail.readonly, gmail.modify scopes)
- Parse email HTML directly (no ScraperAPI needed)
- 3-day lookback window for unread emails
- Deduplication via normalized URLs
- Mark processed emails as read

Status: Ready to implement

## 📝 Notes & Decisions

### Recent Decisions
1. **Anonymous user IDs first:** Ship sync immediately without requiring accounts
2. **Firestore over Realtime DB:** Better querying, offline support, and scalability
3. **No authentication yet:** Simplify initial rollout, add later
4. **Cascade deletes:** Removing app/contact removes related tasks for data consistency
5. **Test mode Firestore:** Anyone can read/write (need to secure before public launch)

### Decision Log
1. **Multi-stage app pipeline:** Chose detailed tracking over simple binary to give user sense of progress
2. **Random task selector:** Added to help with decision paralysis (user-requested)
3. **localStorage first → Firestore:** Ship fast, add sync when ready ✅
4. **Restaurant POS UI:** Full-width cards for focus and clarity
5. **Three rituals/week + daily:** Balance between structure and flexibility

### User Preferences
- OCD/perfectionism considerations → randomizer, clear completion criteria
- Needs structure but not rigidity → suggested but not forced
- Visual learner → emojis, graphics, progress bars
- iPhone 14 Pro Max → optimize for this screen size
- Multi-device user → needs cloud sync ✅

### Future Considerations
- Voice input for quick capture
- Apple Watch complications
- Calendar integration (Google/Apple)
- LinkedIn integration (auto-import jobs)
- AI resume tailoring suggestions
- Interview prep mode
- Collaborative features (accountability partners)
- Public API for third-party integrations

---

## 🔒 Security Considerations

### Current State (Test Mode)
⚠️ **WARNING:** Firestore is in test mode - anyone can read/write all data
- Acceptable for private use / small user base
- Must secure before public launch

### Next Steps for Security
1. Implement Firebase Authentication
2. Add Firestore security rules:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
3. Migrate from anonymous IDs to authenticated UIDs
4. Add data validation rules

---

## 📞 Support & Maintenance

### Known Limitations (Current)
- No user authentication (device-based IDs only)
- Firestore in test mode (not secure for public use)
- No data backup beyond manual export
- No push notifications/reminders
- Browser-dependent (needs modern browser)

### Browser Requirements
- Modern browser (Chrome, Safari, Firefox, Edge)
- JavaScript enabled
- Internet connection for sync
- localStorage available (not private browsing)

### Recommended Browsers
- **Desktop:** Chrome, Safari, Firefox, Edge (latest versions)
- **Mobile:** Safari (iOS), Chrome (Android)

---

## 📈 Version History

- **v1.0** - Initial localStorage-based app
- **v2.0** - Major UX restructure, Today-first design
- **v2.1** - Focus mode enhancements, streak tracking
- **v3.0** - Firebase sync, real-time updates, cloud storage ✨ **CURRENT**

---

**Last Updated:** 2025-01-27
**Current Phase:** Phase 3 - Polish & Enhancement ✅ COMPLETE
**Recent Milestone:** Development workflow automation with automatic Git commits and PROJECT.md sync
**Next Milestone:** PWA conversion and authentication (Phase 3.5)