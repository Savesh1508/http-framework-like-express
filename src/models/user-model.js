const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    age: {
      type: Number,
      min: 1
    },

    password: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

module.exports = model("User", userSchema);