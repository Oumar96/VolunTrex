const graphql = require("graphql");

const TestObject = new graphql.GraphQLObjectType({
  name: "TestObject",
  fields: {
      id: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString }
    }
});

module.exports = TestObject