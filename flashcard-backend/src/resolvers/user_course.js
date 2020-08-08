import UserCourse from '../models/user_course'

const UserCourseResolver = {
    Mutation: {
        joinCourse: async (_, { course }, context) => {
            if (!context.user) return null;
            console.log(await context.user)
            const userCourse = new UserCourse({
                user: await context.user,
                course,
            })
            await userCourse.save()
            return "Success"
        },
        leaveCourse: async (_, { course }, context) => {
            if (!context.user) return null;
            await UserCourse.deleteOne({user: context.user, course: course})
        }
    }
}


export { UserCourseResolver }