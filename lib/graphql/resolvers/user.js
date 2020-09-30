const User = require('../../models/User');

const resolvers = {
    users : async () => {
        await User.sync();
        const users = await User.find();
        return users;
    },
    createUser: async (args) => {
        const name = args;
        const user = await User.create({
            name
        })

        return user;
    }
}

module.exports = resolvers;