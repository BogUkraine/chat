const User = require('../../models/User');

const resolvers = {
    users : async () => {
        console.log('in', User)
        const users = await User.find();
        console.log(users);
        return users;
    },
    createUser: async (args) => {
        console.log('in')
        const name = args.userCreateInput.name;
        console.log(1);
        await User.create({ name : name });
        console.log(2);
        const user = await User.findOne({name})
        console.log('out,', user)
        return user;
    }
}

module.exports = resolvers;