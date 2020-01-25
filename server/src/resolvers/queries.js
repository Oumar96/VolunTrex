const graphql = require('graphql');
const testObject = require('./testQuery')
const logger = require('../logger/logger.js')

logger.info(__filename +"Querying with GraphQL")

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        testObject
    }
});

module.exports = queryType