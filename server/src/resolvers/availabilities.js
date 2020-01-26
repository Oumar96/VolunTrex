const Association = require('../classes/availabilitie')
const graphql = require('graphql');
const database = require("../database/database");
const logger = require('../logger/logger')
const db = new database().db;

var myAvailabilities = {
    type: graphql.GraphQLList(Availability),
    args: {
        user_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
    },
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            query = `SELECT * FROM availability INNER JOIN  users
                        WHERE availability.user_id ='${args.user_id}' 
                        and users.user_id = '${args.user_id}'`
            logger.info(__filename + " Trying to query: "+query)
            db.all(query, function(err, rows) {
                if(err){
                    logger.error(__filename +" "+err)
                    reject(err);
                }
                logger.info(__filename + query +"successfully queried")
                resolve(rows);
            });
        });
    }
}

module.exports = myAvailabilities