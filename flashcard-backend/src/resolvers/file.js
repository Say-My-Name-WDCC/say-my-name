import File from '../models/File'

const FileResolver = {
    Mutation: {
        profileUpload: async (parent, { file }, context) => {
            if (!context.user) return null;
            const response = await handleFileUpload(file);
            console.log(response)
            return response;
        },
        voiceUpload: async (parent, { file }, context) => {
            if (!context.user) return null;
            const response = await handleFileUpload(file);
            console.log(response)
            return response;
        },
    }
}


export { FileResolver }