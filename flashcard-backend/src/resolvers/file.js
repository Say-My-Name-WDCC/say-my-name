import { handleFileUpload } from '../middleware/s3';

const FileResolver = {
    Mutation: {
        profileUpload: async (_, { file }, context) => {
            if (!context.user) return null;
            const response = await handleFileUpload(file);
            await User.findByIdAndUpdate(await context.user,{
                image: response,
            })
            console.log(response)
            return response;
        },
        voiceUpload: async (_, { file }, context) => {
            if (!context.user) return null;
            const response = await handleFileUpload(file);
            await User.findByIdAndUpdate(await context.user,{
                voice: response,
            })
            console.log(response)
            return response;
        },
    }
}


export { FileResolver }