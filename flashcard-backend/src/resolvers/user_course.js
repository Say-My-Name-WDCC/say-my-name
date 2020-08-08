import UserCourse from '../models/user_course'

const UserCourseResolver = {
    Mutation: {
        joinCourse: async (_, { course }, context) => {
            if (!context.user) return null;
            const userCourse = new UserCourse({
                user: await context.user,
                course,
            })
            await userCourse.save()
            return "Success"
        },
        leaveCourse: async (_, { course }, context) => {
            if (!context.user) return null;
            await UserCourse.deleteOne({user: await context.user, course: course})
            return "Success"
        }
    }
}


export { UserCourseResolver }