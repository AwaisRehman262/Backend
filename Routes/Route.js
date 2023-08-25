import { Router } from "express"
import { getAllUsers, createUser, getUserById, deleteUserById, test } from "../Services/Users.js"

const Route = Router()

Route.get("/test", test)

Route.get("/Users", getAllUsers)
Route.post("/Users", createUser)
Route.get("/Users:id", getUserById)
Route.delete("/Users:id", deleteUserById)

Route.get("/Products", getAllUsers)
Route.get("/Products", getUserById)
Route.post("/Products", createUser)
Route.delete("/Products", deleteUserById)

export default Route