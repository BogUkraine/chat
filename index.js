const { ApolloServer } = require('apollo-server')
const schema          = require('./lib/graphql/schemas/index');
const resolvers       = require('./lib/graphql/resolvers/index');
const config          = require('./config');
const { sequelize }   = require('./lib/models/index');

const server = new ApolloServer({
    typeDefs  : schema,
    resolvers : resolvers
})

const start = async () => {
    try {
        server.listen().then(({ port }) => {
            console.log(`Server has started on port ${port}`);
        });

        sequelize
        .authenticate()
        .then(()   =>  console.log('Connection has been established successfully.'))
        .catch(err => console.error('Unable to connect to the database:', err) );

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

module.exports = server;