import { Schema, model, Document } from "mongoose";



export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string;
  role: "admin" | "user";
}


const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["admin", "manager", "staff"], default: "staff" },
}, { timestamps: true });

export default model<IUser>("User", userSchema);