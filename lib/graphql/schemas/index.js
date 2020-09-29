const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type RootQuery {
        events : [String!]!
    }

    type RootMutation {
        createEvent(name : String) : String
    }

    schema {
        query    : RootQuery
        mutation : RootMutation
    }
`);

module.exports = schema;