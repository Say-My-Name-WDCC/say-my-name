import { Schema, model } from 'mongoose'

const GameSessionSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        unique: true
    }
})

const GameSession = model('GameSession', GameSessionSchema)
export default GameSession
