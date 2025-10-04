# Time Blocking System - Technical Specification

## Overview
Pomodoro-style time blocking with granular on/off-task tracking and Strava-like achievement system.

## Core Concepts
- Time Blocks: 30-minute units, rendered as small squares
- Chunks: User-defined work sessions (30/60/90/120 min)
- On/Off Task: Toggle for tracking focused vs distracted time
- Daily Goals: User sets target blocks per day
- Gamification: Streaks, badges, insights like Strava

## State Structure

timeBlocking: {
  currentDay: {
    date: "2025-10-02",
    startTime: "10:00 AM",
    endTime: null,
    goalBlocks: 12,
    completedBlocks: 0,
    activeChunk: {
      id: "chunk_123",
      plannedDuration: 90,
      startTime: "10:00 AM",
      elapsedTime: 0,
      status: "active" | "paused" | "complete",
      onTaskTime: 0,
      offTaskTime: 0
    },
    chunks: [],
    currentMode: "on-task" | "off-task",
    modeStartTime: "10:00:00",
    sessions: []
  },
  history: {},
  achievements: {
    badges: [],
    streaks: {
      workStreak: 0,
      goalStreak: 0,
      longestWork: 0,
      longestGoal: 0
    }
  }
}

## UI - Focus Session Panel (Today View)

Location: Top of Today screen, above task list

Layout:
- Title: "Today's Focus Session"
- Started time display
- Goal input: number of 30-min blocks
- Block grid: 6 wide, wraps rows
- Chunk selector: dropdown (30/60/90/120 min)
- Timer display: MM:SS countdown
- Buttons: Start/Pause/Finish Chunk
- ON TASK / OFF TASK toggle buttons
- Off-task time counter

Visual:
- Empty blocks: Blue outline (border: 2px solid var(--accent))
- Filled blocks: Green (background: var(--ok))
- Timer: 32px, tabular-nums
- Buttons: Full width, obvious toggle states

## Logic

Starting Day:
1. Capture start time
2. Initialize currentDay state
3. Show goal input (default 12)
4. Render empty blocks

Starting Chunk:
1. Select duration
2. Create activeChunk
3. Start countdown timer
4. Auto-set ON TASK mode
5. Begin tracking

ON/OFF Toggle:
- Click OFF TASK logs current session
- Switches mode
- Updates button states
- Chunk timer continues
- Only ON-task time fills blocks

Filling Blocks:
- Every 30 min of on-task time = 1 block green
- Check continuously
- Smooth animation

Pausing:
- Stop timer
- Save elapsed time
- Show Resume button

Finishing:
- Complete chunk
- Show summary
- Ready for next chunk

## Progress View Updates

Daily Summary:
- Date header
- Block grid for that day
- Start/end times
- Goal vs actual
- On-task percentage
- Off-task time
- Tasks completed count
- Insight message

Week View:
- 7 days with block grids
- Completion status icons
- Visual progress

Insights (random rotation):
- "20 min longer than yesterday"
- "+45 minutes vs last week"
- "3 days meeting goals in a row"
- "Best day: 7h 15m"
- "7-day work streak"

## Achievements

Badges:
- Bronze Week: 10 hours
- Silver Week: 20 hours
- Gold Week: 30 hours
- 3-day streak
- 7-day streak
- Goal Crusher: 7 days goals met
- Focused Mind: 95%+ on-task

Celebrations:
- Daily goal: Confetti + insight
- New streak: Fire animation
- New badge: Popup with description

## Implementation Phases

Phase 1: State + Basic UI
- Add timeBlocking state
- Start Day button
- Goal input
- Block grid display only

Phase 2: Timer
- Chunk selector
- Countdown timer
- Start/Pause/Finish
- Firebase persistence

Phase 3: Tracking
- ON/OFF toggle
- Session logging
- Block filling (30 min = 1 block)
- Time displays

Phase 4: Progress
- Daily summary cards
- Week view
- Basic insights
- History

Phase 5: Gamification
- Streak calculations
- Badge system
- Rotating insights
- Celebrations