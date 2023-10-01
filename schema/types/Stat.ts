import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt
  } from 'graphql';
import Team from './Team';
  
  export default new GraphQLObjectType({
    name: 'Stat',
    fields: {
      id: {
        type: GraphQLID
      },
      totalGoals: {
        type: GraphQLInt
      },
      totalYellowCards: {
        type: GraphQLInt
      },
      totalRedCards: {
        type: GraphQLInt
      },
      totalAssists: {
        type: GraphQLInt
      }
    }
  });
  