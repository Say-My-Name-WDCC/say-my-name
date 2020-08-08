import Course from '../models/Course'
import UserCourse from '../models/user_course'

const CourseResolver = {

    Course: {
        users: async ({ _id }) => {
            const course = await UserCourse.find({course: _id}).populate('user')
            if (course!= null){
                return course.map(course => {
                    return course.user
                })
            }
            return[]
        }
    },
    

    Query: {
        course: async (root, args, context) => {
            return await Course.findById(args.id)
        },
        courses: async (root, args, context) => {
            return await Course.find({})
        }
    },
    Mutation: {
        createCourse: async (_, { input }, context) => {
            const { name, description } = input
            const course = new Course({
                name,
                description
            })
            const { id } = await course.save()
            return {
                id: id,
                name,
                description,
            }
        },
        updateCourse: async (_, args, context) => {
            const { name, description } = args.input
            await Course.findByIdAndUpdate(args.id, {
                name,
                description,
            }, function (err, result) {
                if (err) {
                    console.log(err)
                }
            })
            return {
                id: args.id,
                name,
                description,
            }
        }
    }
}


export { CourseResolver }