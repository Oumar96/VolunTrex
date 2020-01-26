const graphql = require('graphql');
const {events,eventsAssociation} = require('./events')
const volunteers = require('./volunteers')
const myAssociations = require('./associations')
const myAvailabilities = require('./availabilities')
const logger = require('../logger/logger.js')

logger.info(__filename +"Querying with GraphQL")

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        events,
        eventsAssociation,
        volunteers,
        myAssociations,
        myAvailabilities
    }
});

module.exports = queryType