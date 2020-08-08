import User from '../models/user'
import {hash} from 'bcrypt'

const saltRounds = 10

const UserResolver = {
    Query: {
        user: async (root, args, context) =>{
            console.log(args)
            return await User.findById(args.id)
        },
        users: async(root, args, context) =>{
            return await User.find({})
        }   
    },
    Mutation:{
        login: async(_, args, context) => {
            
        },
        createUser: async (_, args, context) =>{
            const { firstname, lastname, email, password } = args
            await hash(password, saltRounds, (err, hash) => {
                console.log(hash)
              });
            const user = new User({
                username: username,
                password: password
            })
            console.log(args)
            return {
                authToken: {
                    accessToken: "",
                    expiredAt: ""
                },
                user: {
                    id: "",
                    name: ""
                }
            }
        },
        updateUser: async (_, args, context) =>{
            return
        }
    }
}

export {UserResolver}