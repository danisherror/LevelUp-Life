Perfect—let’s focus purely on the **schema design of the quest**, without implementation details or tech stack. Here's a clean and well-thought-out schema to capture the essence of a "quest" in your self-improvement gamified system:

---

## 🧱 Quest Schema (Conceptual)

### **Core Fields**

| Field               | Type           | Description                                                                         |
| ------------------- | -------------- | ----------------------------------------------------------------------------------- |
| `id`                | UUID / ID      | Unique identifier for the quest                                                     |
| `user_id`           | UUID / ID      | Identifier for the user who owns or created the quest                               |
| `title`             | String         | A short, descriptive name for the quest (e.g., “Drink Water”)                       |
| `sumary`            | String         | As small description of the quest                                                   |
| `description`       | String         | A detailed explanation or instructions for completing the quest                     |
| `category`          | String         | A category label for organizing quests (e.g., “Health”, “Productivity”)             |
| `is_global`         | Boolean        | If `true`, the quest can be shown to other users, pending admin approval            |
| `approved_by_admin` | Boolean        | Indicates if the global quest has been approved by an admin                         |
| `tags`              | Array\[String] | List of tags to allow flexible search and filtering (e.g., `["wellness", "daily"]`) |
| `Participants`      | Array\[String] | List of users that are taking this quest.                                           |
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

| Field             | Type     | Description                                                                      |
| ----------------- | -------- | ---------------------------------------------------------------------------------|
| `id`              | ID       | Unique completion record                                                         |
| `quest_id`        | ID       | Which quest was completed                                                        |
| `user_id`         | ID       | Who completed it                                                                 |
| `completion_date` | Date     | Date completed (no time part)                                                    |
| `completed_at`    | DateTime | Timestamp of completion                                                          |
| `points_awarded`  | Integer  | Points granted for this completion                                               |
| `description`     | String   | A detailed explanation by the user it may be his feedback or anything acc to him |

https://habitica.com/apidoc/#api-Task-CreateChallengeTasks

```js
{
    "success": true,
    "data": {
        "_id": "84f02d6a-7b43-4818-a35c-d3336cec4880",
        "userId": "b0413351-405f-416f-8787-947ec1c85199",
        "text": "Test API Params",
        "alias": "test-api-params",
        "type": "todo",
        "notes": "",
        "tags": [
            "3d5d324d-a042-4d5f-872e-0553e228553e"
        ],
        "value": -1,
        "priority": 2,
        "attribute": "int",
        "challenge": {
            "taskId": "4a29874c-0308-417b-a909-2a7d262b49f6",
            "id": "f23c12f2-5830-4f15-9c36-e17fd729a812"
        },
        "group": {
            "assignedUsers": [],
            "approval": {
                "required": false,
                "approved": false,
                "requested": false
            }
        },
        "reminders": [],
        "createdAt": "2017-01-13T21:23:05.949Z",
        "updatedAt": "2017-01-14T19:41:29.466Z",
        "checklist": [],
        "collapseChecklist": false,
        "completed": false,
        "id": "84f02d6a-7b43-4818-a35c-d3336cec4880"
    },
    "notifications": []
}
`

