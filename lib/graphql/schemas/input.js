const inputs = `
    input MessageCreateInput {
        value      : String!
        created_by : ID!
        chat_id    : ID!
    }

    input UserCreateInput {
        name : String!
    }
`

module.exports = inputs;