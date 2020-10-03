const userResolvers    = require('./user');
const messageResolvers = require('./message');
const channelResolvers = require('./channel');

const resolvers = {
    ...userResolvers,
    ...messageResolvers,
    ...channelResolvers
}

module.exports = resolvers;