const { GraphQLObjectType} = require('graphql');
const {addVolunteering, deleteVolunteering} = require('./volunteerToEvent')
const logger = require('../logger/logger.js')

logger.info(__filename +"Mutating with GraphQL")
const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addVolunteering,
        deleteVolunteering
    }
});

module.exports = mutationType;