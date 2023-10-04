import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
  } from 'graphql';
  
import Team from './Team';
console.log("Group.ts");
  export default new GraphQLObjectType({
    name: 'Group',
    fields: {
      id: {
        type: GraphQLID
      },
      name: {
        type: GraphQLString
      },
      team: {
        type: Team
        }
    }
  });
  