import { Schema, model } from "mongoose";

const productSchema = new Schema({
  sku: { type: String, unique: true },
  name: String,
  category: String,
  unit: String,
  price: Number,
  cost: Number,
  currentStock: { type: Number, default: 0 },
  minimumStock: Number
}, { timestamps: true });

export default model("Product", productSchema);
