const Events = require('../classes/event')
const graphql = require('graphql');
const database = require("../database/database");
const logger = require('../logger/logger')
const db = new database().db;


var events = {
    type: graphql.GraphQLList(Events),
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            query = `SELECT * FROM events;`
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

module.exports = events