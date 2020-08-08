import Course from '../models/Course'
import UserCourse from '../models/user_course'

const shuffle=(arr1) =>{
        // shuffle arr
        let ctr = c.length;
        let temp;
        let index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arr1
} 

const CourseResolver = {

    Course: {
        users: async ({ _id }) => {
            const course = await UserCourse.find({ course: _id }).populate('user')
            if (course != null) {
                return course.map(course => {
                    return course.user
                })
            }
            return []
        }
    },


    Query: {
        course: async (root, args, context) => {
            return await Course.findById(args.id)
        },
        courses: async (root, args, context) => {
            return await Course.find({})
        },
        faces: async (root, args, context) => {
            const { courseID, count } = args

            const courses = await UserCourse.find({ course: _id }).limit(count).populate('user')
            if (courses != null) {
                return shuffle(courses.map(course => {
                    return course.user
                }))
            }

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