const TestObject = require('../classes/testObject')
const graphql = require('graphql');
const database = require("../database/database");
const logger = require('../logger/logger.js')
const db = new database().db;


var testObject = {
    type: graphql.GraphQLList(TestObject),
    resolve: (root, args, context, info) => {
        return new Promise((resolve, reject) => {
            query = `SELECT * FROM myTable;`
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

module.exports = testObject