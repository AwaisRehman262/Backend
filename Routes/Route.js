import { Router } from "express"
import {
    getAllUsers, createUser, getUserById, deleteUserById} from "../Services/Users.js"
import { addNewProduct, deleteproductById, findProductById, getAllProducts } from "../Services/Products.js"

const RouterMan = Router()

RouterMan.get("/Users", getAllUsers)
RouterMan.post("/Users", createUser)
RouterMan.get("/Users:email", getUserById)
RouterMan.delete("/Users:email", deleteUserById)

RouterMan.get("/Products", getAllProducts)
RouterMan.post("/Products", addNewProduct)
RouterMan.get("/Products:id", findProductById)
RouterMan.delete("/Products:id", deleteproductById)

export default RouterMan