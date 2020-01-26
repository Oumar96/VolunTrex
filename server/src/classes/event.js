const graphql = require("graphql");

const Events = new graphql.GraphQLObjectType({
  name: "Events",
  fields: {
      event_id: { type: graphql.GraphQLString },
      event_name: { type: graphql.GraphQLString },
      description: { type: graphql.GraphQLString },
      association_id: { type: graphql.GraphQLString },
      total_volunteers: { type: graphql.GraphQLString },
      activity_types: { type: graphql.GraphQLString },
      picture: { type: graphql.GraphQLString },
      days: { type: graphql.GraphQLString },
      start_time: { type: graphql.GraphQLString },
      end_time: { type: graphql.GraphQLString }
    }
});

module.exports = Events