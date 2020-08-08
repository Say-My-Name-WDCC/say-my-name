import { Schema, model } from 'mongoose'

const WrongSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    wrong: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
})

const Wrong = model('Wrong', WrongSchema)
export default Wrong
