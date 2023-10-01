import {
    GraphQLObjectType,
    GraphQLID,
  } from 'graphql';
import Team from './Team';
import Match from './Match';
import Group from './Group';
  
  export default new GraphQLObjectType({
    name: 'GroupMatch',
    fields: {
      id: {
        type: GraphQLID
      },
      match: {
        type: Match
      },
      group: {
        type: Group
        }
    }
  });
  