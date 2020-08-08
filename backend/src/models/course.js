import { Schema, model } from 'mongoose'

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    }
})

const Course = model('Course', CourseSchema)
export default Course
