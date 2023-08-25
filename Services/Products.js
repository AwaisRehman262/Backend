import { ProductModel } from "../Models/Products"

export const getAllProducts = async (req, res) => {
  const users = await ProductModel.find().select("-password")
  res.status(200).send({ data: users })
}

export const addNewProduct = async (req, res) => {
  const body = req.body

  const user = new ProductModel(body)
  await user.save()

  res.status(201).send({ message: "Product Added Successfully" })
}

export const findProductById = async (req, res) => {
  const id = req.params.id
  const user = await ProductModel.findById(id)
  res.status(200).send({ data: user })
}

export const deleteproductById = async (req, res) => {
  const id = req.params.id
  const product = await ProductModel.findByIdAndRemove(id)

  res.status(200).send({ data: users })
}