const { ApolloServer } = require("apollo-server");
const {typeDefs} = require("./schema/typedefs");
const {resolvers} = require("./schema/resolvers");

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`YOUR API IS RUNNING AT : ${url}!`);
})