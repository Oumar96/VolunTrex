const graphql = require("graphql");

const Association = new graphql.GraphQLObjectType({
  name: "Association",
  fields: {
      association_id: { type: graphql.GraphQLString },
      association_name: { type: graphql.GraphQLString },
      description: { type: graphql.GraphQLString },
  }
});

module.exports = Association