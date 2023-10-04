import { GraphQLList, GraphQLObjectType } from 'graphql';
import { ObjectType, Field, ID} from 'type-graphql';
import groupType from './Group';
import groupResolver from '../../resolvers/groupResolver';

console.log("Query.ts");
export default new GraphQLObjectType({
  name: 'Query',
  fields: {
    groups: {
      type: groupType,
      //resolve: () => groupResolver.Query.groups
    },
  }
});


@ObjectType()
export class Group {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;
}


@ObjectType()
export class GetAllGroupsResponse {
  @Field(() => [Group])
  groups!: Group[];
}

@ObjectType()
export class GetGroupByIdResponse {
  @Field(() => Group, { nullable: true })
  group!: Group | null;
}

