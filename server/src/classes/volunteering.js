const graphql = require("graphql");

const Volunteering = new graphql.GraphQLObjectType({
  name: "Volunteering",
  fields: {
      event_id: { type: graphql.GraphQLString },
      event_name: { type: graphql.GraphQLString },
    }
});

module.exports = Volunteering