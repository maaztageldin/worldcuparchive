import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import groupResolver from './resolvers/groupResolver';
import teamResolver from './resolvers/teamResolver';
import { readFileSync } from 'fs';
import playerResolver from './resolvers/playerResolver';
import tournamentResolver from './resolvers/tournamentResolver';
import matchResolver from './resolvers/matchResolver';

const app = express();
const port = 3000;

const typeDefs = readFileSync('schema.graphql', 'utf-8');
console.log("server--1");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [groupResolver,teamResolver,playerResolver, tournamentResolver,matchResolver], 
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Serveur GraphQL en écoute sur le port ${port}`);
});
