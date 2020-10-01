const express         = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema          = require('./lib/graphql/schemas/index');
const resolvers       = require('./lib/graphql/resolvers/index');
const config          = require('./config');
const initModels      = require('./lib/models/index');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema    : schema,
    rootValue : resolvers,
    graphiql  : true,
    pretty    : true
}))

const start = async () => {
    try {
        app.listen(config.port, () => {
            console.log(`Server has started on port ${config.port}`);
        });
    } catch (err) {
        console.log('Something went wrong: ', err);
    }
}

start();

module.exports = app;