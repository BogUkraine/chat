const inputs = `
    input MessageCreateInput {
        value      : String!
        created_by : ID!
        chat_id    : ID!
    }

    input UserCreateInput {
        value      : String!
        created_by : ID!
        chat_id    : ID!
    }
`

module.exports = inputs;