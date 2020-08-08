import Course from '../models/Course'
import UserCourse from '../models/user_course'

const shuffle=(arr) =>{
        // shuffle arr
        let arr1 = arr.slice()
        let ctr = arr1.length;
        let temp;
        let index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr1[ctr];
            arr1[ctr] = arr1[index];
            arr1[index] = temp;
        }
        //console.log(arr1)
        return arr1
} 

const CourseResolver = {

    Course: {
        users: async ({ _id }) => {
            const course = await UserCourse.find({ course: _id }).populate('user')
            if (course != null) {
                return course.map(({user}) => {
                    return {
                        id: user._id,
                        ...user
                    }
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
            const courses = await UserCourse.find({ course: courseID }).limit(count).populate('user')
            console.log(courses)
            if (courses != null) {
                const array = shuffle(courses.map(({user}) => {
                    return {
                        id: user._id,
                        ...user._doc
                    }
                }))
                console.log(array)
                return array
            }
            return []
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
            }, (err, result)=> {
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