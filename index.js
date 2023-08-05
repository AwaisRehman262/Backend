import express, { json } from "express";
import { Schema, model, connect } from "mongoose";
const app = express()
const port = 2629

app.use(json())

let db_uri = "mongodb+srv://AwaisRehman262:1sMezjyT00xP3w3i@productmanagement.ipqbyrc.mongodb.net/?retryWrites=true&w=majority"

const callDb = async () => {
  try {
    await connect(db_uri)
    console.log("DB connected")
  } catch (error) {
    console.log(error)
  }
}

callDb()

const userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  phone: { type: String, require: true }
})

const User = model("user", userSchema)

//product api's

// app.get('/', (req, res) => {
//   res.send('Test!')
//   })

// app.get('/Products', async (req, res) => {
//   const users = await User.find().select("-password")
//   res.status(200).send(users)
//   })

// app.post('/product', async (req, res) => {
//   const body = req.body

//   const user = new User(body)
//   await user.save()

//   res.status(201).send({message: "product added successfully"})
// })

app.get('/product:id', (req, res) => {
  res.status(200).send("product")
})

// app.post('/prudct-post', (req, res) => {
//   res.status(201).send("product-crated.")
// })

// app.delete('/product-delete', (req, res) => {
//   res.status(303).send("product-deleted.")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})