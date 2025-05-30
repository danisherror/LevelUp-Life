Need to add following things to the schema
- Level name like 1-5 level beginer, then expert like that
- Photo url
- Profile url
- Block user
- Total Log Ins
- Latest Log In

```js
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },

    password: {
      type: String,
      required: true,
      select: false, // don't return password by default
    },

    auth_provider: {
      type: String,
      enum: ['local', 'google', 'apple'],
      default: 'local',
    },

    avatar_url: {
      type: String,
      default: '',
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    bio: {
      type: String,
      default: '',
    },

    timezone: {
      type: String,
      default: 'UTC',
    },

    preferences: {
      theme: { type: String, enum: ['light', 'dark'], default: 'light' },
      reminders_enabled: { type: Boolean, default: true },
      reminder_time: { type: String, default: '08:00' }, // HH:mm format
      language: { type: String, default: 'en' },
    },

    level: {
      type: Number,
      default: 1,
    },

    xp: {
      type: Number,
      default: 0,
    },

    total_points: {
      type: Number,
      default: 0,
    },

    completed_quests: {
      type: Number,
      default: 0,
    },

    current_streak: {
      type: Number,
      default: 0,
    },

    longest_streak: {
      type: Number,
      default: 0,
    },

    badges: {
      type: [String],
      default: [],
    },

    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],

    public_quests: {
      type: Boolean,
      default: false,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);
```