import { Request, Response } from "express";
import StockMovement from "../models/StockMovement.js";
import Product from "../models/Product.js";

export const createMovement = async (req: Request, res: Response) => {
  try {
    const { productId, type, quantity, note } = req.body;

    if (!req.user) {
      return res.status(401).json({ error: "No autorizado" });
    }

    const movement = await StockMovement.create({
      productId,
      type,
      quantity,
      note,
      createdBy: req.user.id,
    });

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    if (type === "IN") product.currentStock += quantity;
    if (type === "OUT") product.currentStock -= quantity;

    await product.save();

    return res.status(201).json(movement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear movimiento" });
  }
};
