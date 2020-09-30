const types = `
    type User {
        id      : ID!
        name    : String! 
    }

    type Message {
        id         : ID!
        value      : String!
        created_by : ID!
        chat_id    : ID!
        created_at : String!
        updated_at : String!
    }
`

module.exports = types;