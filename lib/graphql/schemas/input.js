const inputs = `
    input MessageCreateInput {
        value      : String!
        created_by : ID!
    }

    input UserCreateInput {
        name : String!
    }
`

module.exports = inputs;