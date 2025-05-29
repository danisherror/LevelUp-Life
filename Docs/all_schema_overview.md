Great question! Besides the **User** schema, here are the key schemas you’ll want to include for your self-improvement leveling website to work smoothly and be scalable:

---

## Essential Schemas for Your Project

### 1. **Quest (Task) Schema**

* Defines the quests/tasks users create.
* Includes recurring info, points, descriptions, deadlines.

### 2. **Quest Completion Schema**

* Tracks each time a quest is completed.
* Essential for streaks, progress, and history.

### 3. **Friendship / Social Schema**

* To enable friends, comparisons, and leaderboards.
* Example fields: `user_id`, `friend_id`, `status` (pending, accepted, blocked).

### 4. **User Profile Schema**

* Additional user info separate from authentication:

  * Avatar
  * Bio
  * Preferences (notifications, privacy)
  * Level, total points earned (cached for quick access)

### 5. **Notification / Reminder Schema**

* To manage scheduled reminders or notifications:

  * User ID
  * Quest ID (optional)
  * Notification type (email, push)
  * Scheduled time
  * Status (sent, pending)

---

## Optional / Future-Ready Schemas

### 6. **Achievements / Badges**

* Stores badges earned for milestones:

  * Badge ID, Name, Description, Icon
  * User ID, Date earned

### 7. **Leaderboards**

* Cached leaderboards for quick retrieval.
* User ranking, points, level, timestamp.

### 8. **Settings**

* Per-user or global settings, such as:

  * Theme preference
  * Notification preferences

### 9. **Categories / Tags**

* For quests to organize by types like Health, Productivity, etc.

---

## Summary Table

| Schema Name       | Purpose                                   |
| ----------------- | ----------------------------------------- |
| Users             | Basic user info and login credentials     |
| Quests            | Tasks, quests with repetition and rewards |
| Quest Completions | Logs of when quests were completed        |
| Friendships       | Social connections and friend status      |
| User Profiles     | Extended user data (avatars, bio, etc.)   |
| Notifications     | Reminder and notification scheduling      |
| Achievements      | Badges and milestones earned by users     |
| Leaderboards      | Cached rankings for users                 |
| Categories        | Organizing quests into groups             |
| Settings          | User or app preferences                   |

---

Would you like me to help draft any specific schema next? Or maybe suggest relationships and constraints between them?
