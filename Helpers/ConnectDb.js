import { connect } from "mongoose"

let Mongodb_uri = "mongodb+srv://aw2946652admin:PizwViNLviFNYuSL@admin.eeuwkmq.mongodb.net/?retryWrites=true&w=majority"

export const connectDataBase = async () => {
    try {
        await connect(Mongodb_uri)
        console.log("DB Connected")
    } catch (e) {
        console.log(e)
    }
}