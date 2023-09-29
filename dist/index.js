"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_tools_1 = require("graphql-tools");
const app = (0, express_1.default)();
const port = 3000;
// Schéma GraphQL
const typeDefs = `
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello, GraphQL!'
    }
};
const schema = (0, graphql_tools_1.makeExecutableSchema)({ typeDefs, resolvers });
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    graphiql: true
}));
app.listen(port, () => {
    console.log(`Serveur GraphQL en écoute sur le port ${port}`);
});
