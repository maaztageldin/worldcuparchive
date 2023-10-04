import { GraphQLSchema } from 'graphql';
import queryType from './types/Query';

console.log("index.ts -> GraphQLSchema");
export default new GraphQLSchema({ 
    query: queryType
});
