

const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'SuccessType',
  fields: {
    ok: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },
    message: {
      type: GraphQLString
    }
  }
});