const User = require('./models/User')

const resolvers = {

    Query: {
        hello: () => 'Hello World',
        getAllUsers: async () => {
            const users = await User.find()
            return users
        }
    },
    Mutation:{
        createUser: async (_, args) => {
            const {nickname, password} = args
            const newUser = new User({nickname, password})
            await newUser.save()
            return newUser
        }
    }

};

module.exports = { resolvers };