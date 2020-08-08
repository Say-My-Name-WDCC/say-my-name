import User from '../models/user'

const UserResolver = {
    Query: {
        user: async (root, args, context) =>{
            return await User.findById(id)
        },
        users: async(root, args, context) =>{
            return await User.find({})
        }   
    },
    Mutation:{
        login: async(_, args, context) => {
            
        },
        createUser: async (_, args, context) =>{
            console.log(args)
            return {
                authToken: {
                    accessToken: "test",
                    expiredAt: "test"
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