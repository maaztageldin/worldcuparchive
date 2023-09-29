import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

const app = express();
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

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Serveur GraphQL en écoute sur le port ${port}`);
});
