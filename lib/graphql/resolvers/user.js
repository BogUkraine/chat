const User = require('../../models/User');

const resolvers = {
    users : async () => {
        const users = await User.findAll();
        return users;
    },
    createUser: async (args) => {
        const name = args.userCreateInput.name;
        const user = await User.create({ name : name });
        return user;
    }
}

module.exports = resolvers;