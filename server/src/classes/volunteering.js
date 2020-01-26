const graphql = require("graphql");

const Volunteering = new graphql.GraphQLObjectType({
  name: "Volunteering",
  fields: {
      user_id: { type: graphql.GraphQLString },
      event_id: { type: graphql.GraphQLString },
    }
});

module.exports = Volunteering