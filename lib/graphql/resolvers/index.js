const userResolvers    = require('./user');
const messageResolvers = require('./message');
const channelResolvers = require('./channel');

const resolvers = {
    Query : {
        ...userResolvers.Query,
        ...messageResolvers.Query,
        //...channelResolvers.Query
    },
    Mutation : {
        ...userResolvers.Mutation,
        ...messageResolvers.Mutation,
        // ...channelResolvers.Mutation
    },
    Subscription : {
        ...messageResolvers.Subscription
    }
    
}

module.exports = resolvers;