const graphql = require("graphql");

const Availability = new graphql.GraphQLObjectType({
  name: "Availability",
  fields: {
      user_id: { type: graphql.GraphQLString },
      days: { type: graphql.GraphQLString },
      start_time: { type: graphql.GraphQLString },
      end_time: { type: graphql.GraphQLString }
  }
});

module.exports = Availability