const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    source: {
      type: String,
      default: "Website Form",
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Converted", "Lost"],
      default: "New",
    },

    notes: [noteSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);