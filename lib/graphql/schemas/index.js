const { buildSchema } = require('graphql');

const input = require('./input');
const type  = require('./type');

const schema = buildSchema(`
    ${type}
    ${input}

    type RootQuery {
        messages : [Message!]!
    }

    type RootMutation {
        createMessage(messageCreateInput : MessageCreateInput) : Message
        createUser(userCreateInput : MessageCreateInput) : User
    }

    schema {
        query    : RootQuery
        mutation : RootMutation
    }
`);

module.exports = schema;