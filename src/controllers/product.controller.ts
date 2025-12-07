import Product from "../models/Product";
import { Request, Response } from "express";

export const createProduct = async (req: Request, res: Response) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
};
