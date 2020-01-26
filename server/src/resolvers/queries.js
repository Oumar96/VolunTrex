const graphql = require('graphql');
const events = require('./events')
const logger = require('../logger/logger.js')

logger.info(__filename +"Querying with GraphQL")

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        events
    }
});

module.exports = queryType