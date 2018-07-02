const mongoose = require("mongoose");

const CounterSchema = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});
const counter = mongoose.model("counter", CounterSchema);

const TodoSchema = mongoose.Schema(
  {
    text: String
  },
  {
    timestamps: true
  }
);

// Used to change the _id to id for the entries into this schema
TodoSchema.set('toJSON', {
  transform:  (doc, ret, options) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
  }
});

module.exports = mongoose.model("Todo", TodoSchema);
