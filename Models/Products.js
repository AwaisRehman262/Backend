import { Schema, model } from "mongoose"

const productSchema = new Schema({
    id: { type: Number, require: true },
    title: { type: String, require: true, unique: true },
    description: { type: String, require: false },
    price: { type: Number, require: true }
})

export const ProductModel = model("user", productSchema)