import User from '../models/user'
import { hash } from 'bcrypt'

const saltRounds = 10

const UserResolver = {
    Query: {
        user: async (root, args, context) => {
            console.log(args)
            return await User.findById(args.id)
        },
        users: async (root, args, context) => {
            console.log(await User.find({}))
            return await User.find({})
        }
    },
    Mutation: {
        login: async (_, args, context) => {

        },
        createUser: async (_, {input}, context) => {
            const { firstname, lastname, email, password } = input
            const hashedPassword = await new Promise((resolve, reject) => {
                hash(password, saltRounds, function (err, hash) {
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
                    accessToken: "test",
                    expiredAt: "test"
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