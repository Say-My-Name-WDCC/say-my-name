import User from '../models/user'

const UserResolver = {
    Query: {
        async user(root, args, context){
            return await User.findById(id)
        },
        async users(root, args, context){
            return await User.find({})
        }   
    },
    Mutation:{
        async login(_, args, context){
            
        },
        async createUser(_, args, context){
            
        },
        async updateUser(_, args, context){
            
        }
    }
}

const 