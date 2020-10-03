const express         = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema          = require('./lib/graphql/schemas/index');
const resolvers       = require('./lib/graphql/resolvers/index');
const config          = require('./config');
const db              = require('./lib/models/index');

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
        db.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

        app.listen(config.port, () => {
            console.log(`Server has started on port ${config.port}`);
        });

        process.on('SIGTERM', () => {    
            process.exit(0);
        });

        process.on('SIGINT', async () => {
            process.exit(0);
        });

        process.on('uncaughtException', error => {
            console.error(error);
        });

        process.on('unhandledRejection', error => {
            console.error(error);
        });
    } catch (err) {
        console.log('Something went wrong: ', err);
    }
}

start();

module.exports = app;