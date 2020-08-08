import { Schema, model } from "mongoose";

const UserCourseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
    },
});

const UserCourse = model("UserCourse", UserCourseSchema);
export default UserCourse;
