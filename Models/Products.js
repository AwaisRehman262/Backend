import { Schema, model } from "mongoose"

const productSchema = new Schema({
    id: { type: Number, require: true },
    title: { type: String, require: true, unique: true },
    price: { type: Number, require: true },
    description: { type: String, require: false },
    category:{type : String ,require: true},
    image: { type: String, require: true },
    rating: {type: Object,require :false}
})

export const ProductModel = model("products", productSchema)