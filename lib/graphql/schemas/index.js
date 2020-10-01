const { buildSchema } = require('graphql');

const input = require('./input');
const type  = require('./type');

const schema = buildSchema(`
    ${type}
    ${input}

    type RootQuery {
        messages : [Message!]!
        users    : [User!]!
    }

    type RootMutation {
        createMessage(messageCreateInput : MessageCreateInput) : Message
        createUser(userCreateInput : UserCreateInput) : User
    }

    schema {
        query    : RootQuery
        mutation : RootMutation
    }
`);

module.exports = schema;