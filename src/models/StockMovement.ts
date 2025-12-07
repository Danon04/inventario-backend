import { Schema, model } from "mongoose";

const movementSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  type: { type: String, enum: ["IN", "OUT", "ADJUST"] },
  quantity: Number,
  note: String,
  createdBy: { type: Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default model("StockMovement", movementSchema);
