const Volunteering = require('../classes/volunteering')
const graphql = require('graphql');
const database = require("../database/database");
const logger = require('../logger/logger')
const db = new database().db;

var volunteers = {
    type: graphql.GraphQLList(Volunteering),
    args: {
        user_id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
    },
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            query = `SELECT * FROM events WHERE event_id IN
                    (SELECT event_id FROM volunteering INNER JOIN users
                        WHERE volunteering.user_id = '${args.user_id}'
                        and users.user_id = '${args.user_id}')`
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

module.exports = volunteers