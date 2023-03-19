import { Schema, model, models } from "mongoose";

const useSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    password: String
})

const User = models.user || model('user', useSchema)

export default User