import User from '../models/user'

import { createJWT, hashPassword, comparePassword } from '../middleware/auth'
import UserCourse from '../models/user_course';


const UserResolver = {

    User: {
        courses: async ({ id }) => {
            console.log(id)
            const courses = await UserCourse.find({ user: id }).populate('course')
            if (courses != null) {
                return courses.map(course => {
                    console.log("course")
                    console.log(course.course._id)
                    const c = {
                        id: course.course._id,
                        ...course.course._doc
                    }
                    console.log("output")
                    console.log(c)
                    return c
                })
            }
            return []
        }
    },

    Query: {
        me: async (root, args, context) => {
            if (!context.user) return null;
            const user = await User.findById(await context.user)
            console.log(user)
            const test = {
                id: user._id,
                ...user._doc
            }
            console.log(test)
            return test
        },
        user: async (root, args, context) => {
            if (!context.user) return null;
            const user = await User.findById(args.id)
            return {
                id: user._id,
                ...user._doc
            }
        },
        users: async (root, args, context) => {
            if (!context.user) return null;
            const users = await User.find({})
            return users.map(user => {
                return {
                    id: user._id,
                    ...user._doc
                }
            })
        }
    },
    Mutation: {
        login: async (_, { input }, context) => {
            const { email, password } = input
            const user = await User.findOne({ email: email })
            if (comparePassword(password, user.hash)) {
                return {
                    authToken: {
                        accessToken: createJWT(user._id),
                        expiredAt: new Date(new Date().setDate(new Date().getDate() + 1)),
                    },
                    user: {
                        id: user._id,
                        ...user
                    }
                }
            }
            return
        },
        createUser: async (_, { input }, context) => {
            const { firstname, lastname, email, password } = input
            const user = new User({
                email,
                firstname,
                lastname,
                hash: await hashPassword(password),
            })
            const { id } = await user.save()
            return {
                authToken: {
                    accessToken: createJWT(id),
                    expiredAt: new Date(new Date().setDate(new Date().getDate() + 1)),
                },
                user: {
                    id: id,
                    firstname,
                    lastname,
                    email,
                }
            }
        },
        updateUser: async (_, args, context) => {
            const { firstname, lastname, email, password } = args.input
            await User.findByIdAndUpdate(args.id, {
                firstname,
                lastname,
                email
            }, (err, result) => {
                if (err) {
                    console.log(err)
                }
            })
            return {
                id: args.id,
                firstname,
                lastname,
                email,
            }
        }
    }
}

export { UserResolver }