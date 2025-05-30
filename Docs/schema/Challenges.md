He we can start a public chalange
- It can have multiple quest
- It has reward for each quest
- After completing the all quest inside a Challenge you get bonus rewards
- Multiple user can join this quest


----
## Schema

- Created by
- Participants
- Reward
- Title
- Summary
- Description
- Time of creation
- Deadline(it can have or it doesn't)
- 



```js
{
  "data": {
    "group": {
     "_id": "group-id-associated-with-challenge",
     "name": "MyGroup",
     "type": "guild",
     "privacy": "public"
    },
    "name": "Long Detailed Name of Challenge",
    "shortName": "my challenge",
    "leader": {
      "_id": "user-id-of-challenge-creator",
      "profile": {
        "name": "MyUserName"
      }
    },
    "updatedAt": "timestamp,
    "createdAt": "timestamp",
    "_id": "challenge-id",
    "prize": 0,
    "memberCount": 1,
    "tasksOrder": {
      "rewards": [
        "uuid-of-challenge-reward"
      ],
      "todos": [
        "uuid-of-challenge-todo"
      ],
      "dailys": [
        "uuid-of-challenge-daily"
      ],
      "habits": [
        "uuid-of-challenge-habit"
      ]
    },
    "official": false,
    "id": "challenge-id"
  }
}
```