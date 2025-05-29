Perfect—let’s focus purely on the **schema design of the quest**, without implementation details or tech stack. Here's a clean and well-thought-out schema to capture the essence of a "quest" in your self-improvement gamified system:

---

## 🧱 Quest Schema (Conceptual)

### **Core Fields**

| Field               | Type           | Description                                                                         |
| ------------------- | -------------- | ----------------------------------------------------------------------------------- |
| `id`                | UUID / ID      | Unique identifier for the quest                                                     |
| `user_id`           | UUID / ID      | Identifier for the user who owns or created the quest                               |
| `title`             | String         | A short, descriptive name for the quest (e.g., “Drink Water”)                       |
| `description`       | String         | A detailed explanation or instructions for completing the quest                     |
| `category`          | String         | A category label for organizing quests (e.g., “Health”, “Productivity”)             |
| `is_global`         | Boolean        | If `true`, the quest can be shown to other users, pending admin approval            |
| `approved_by_admin` | Boolean        | Indicates if the global quest has been approved by an admin                         |
| `tags`              | Array\[String] | List of tags to allow flexible search and filtering (e.g., `["wellness", "daily"]`) |
| `created_at`        | Timestamp      | Date and time when the quest was created                                            |
| `updated_at`        | Timestamp      | Date and time when the quest was last updated                                       |



---

### **Task Configuration**

| Field        | Type        | Description                                                 |
| ------------ | ----------- | ----------------------------------------------------------- |
| `type`       | Enum        | Either `one-time` or `recurring`                            |
| `frequency`  | Enum/String | For recurring: `daily`, `weekly`, `custom`, etc.            |
| `due_date`   | DateTime    | When the quest must be completed (only for one-time quests) |
| `start_date` | DateTime    | When this quest becomes active (optional)                   |
| `end_date`   | DateTime    | When the quest expires or ends (optional)                   |

---

### **Reward and Progress**

| Field            | Type     | Description                                               |
| ---------------- | -------- | --------------------------------------------------------- |
| `points`         | Integer  | How many points the user gets upon completing this quest  |
| `is_completed`   | Boolean  | For one-time quests: has it been completed?               |
| `completed_at`   | DateTime | Timestamp of when it was completed (if applicable)        |
| `streak_enabled` | Boolean  | Whether this quest should track streaks (good for habits) |

---

### **Behavior & Optional Enhancements**

| Field               | Type        | Description                                      |
| ------------------- | ----------- | ------------------------------------------------ |
| `reminders_enabled` | Boolean     | Whether to send notifications/reminders          |
| `reminder_time`     | Time        | What time of day to send a reminder (if enabled) |
| `category`          | String      | Tag or type, like `Health`, `Productivity`, etc. |
| `difficulty`        | Enum/String | For display/weighting: `easy`, `medium`, `hard`  |

---

## 🧠 Summary

A quest = **task + game mechanics + scheduling + rewards**
The goal of this schema is to let the quest behave like:

* A **single goal** (e.g., “Write journal today”)
* Or a **habit tracker** (e.g., “Meditate every day”)
* Or a **goal with an end date** (e.g., “Complete course by next month”)

---

Would you like to move next to:

* **Schema for tracking completions/streaks?**
* Or **finalizing categories/fields for frequency logic** (e.g., custom repeat patterns)?

##  Quest Completion Table (logs each completion instance)

| Field             | Type     | Description                                                                |
| ----------------- | -------- | ---------------------------------------------------------------------------|
| `id`              | ID       | Unique completion record                                                   |
| `quest_id`        | ID       | Which quest was completed                                                  |
| `user_id`         | ID       | Who completed it                                                           |
| `completion_date` | Date     | Date completed (no time part)                                              |
| `completed_at`    | DateTime | Timestamp of completion                                                    |
| `points_awarded`  | Integer  | Points granted for this completion                                         |
| `description`     | String   | A detailed explanation or instructions for completing the quest            |
