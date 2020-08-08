import User from '../models/user'
import { hash, compare } from 'bcrypt'
import { createJWT } from '../middleware/auth'
import UserCourse from '../models/user_course'

const saltRounds = 10

const UserResolver = {
    Query: {
        user: async (root, args, context) => {
            if (!context.user) return null;
            return await User.findById(args.id)
        },
        users: async (root, args, context) => {
            if (!context.user) return null;
            return await User.find({})
        }
    },
    Mutation: {
        login: async (_, {input}, context) => {
            const {email, password} = input
            const user = await User.findOne({email: email})
            console.log(user)
            const login = await new Promise((resolve, reject) => {
                compare(password, user.hash, (err, res)=> {
                    if (err) reject(err)
                    resolve(res)
                })
            })
            if (login){
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
        createUser: async (_, {input}, context) => {
            const { firstname, lastname, email, password } = input
            const hashedPassword = await new Promise((resolve, reject) => {
                hash(password, saltRounds, (err, hash) => {
                    if (err) reject(err)
                    resolve(hash)
                });
            })
            const user = new User({
                email,
                firstname,
                lastname,
                hash: hashedPassword,
            })
            const {id} = await user.save()
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
            return
        }
    }
}

export { UserResolver }