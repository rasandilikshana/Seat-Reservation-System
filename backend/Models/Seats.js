import mongoose from 'mongoose';
const { Schema } = mongoose;

const seatsSchema = new Schema({
  seatId: Number,
  name: String,
  status: Boolean,
  date: { type: Date, default: Date.now },
},
);