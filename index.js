const express     = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema      = require('./lib/graphql/schemas/index');
const resolvers   = require('./lib/graphql/resolvers/index');
const config      = require('./config');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema    : schema,
    rootValue : {
        events : () => {
            return ['kek', 'kek2']
        },
        createEvent: (args) => {
            const eventName = args.name;
            return eventName;
        }
    },
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