const graphql = require("graphql");

const User = new graphql.GraphQLObjectType({
  name: "User",
  fields: {
      user_id: { type: graphql.GraphQLString },
      last_name: { type: graphql.GraphQLString },
      first_name: { type: graphql.GraphQLString },
      email: { type: graphql.GraphQLString }
    }
});

module.exports = User