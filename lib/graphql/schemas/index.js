const { gql } = require('apollo-server');

const input = require('./input');
const type  = require('./type');

const schema = gql`
    ${type}
    ${input}

    type Query {
        message  : [Message!]!
        users    : [User!]!
    }

    type Mutation {
        createMessage(messageCreateInput : MessageCreateInput) : Message!
        createUser(userCreateInput : UserCreateInput) : User!
    }

    type Subscription {
        message(messageCreateInput : MessageCreateInput) : Message!
        newMessage(messageCreateInput : MessageCreateInput) : Message!
    }

`;

module.exports = schema;


// schema {
    // query        : RootQuery
    // mutation     : RootMutation
    // subscription : RootSubscription
// }