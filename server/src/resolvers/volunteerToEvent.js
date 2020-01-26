const Volunteering = require('../classes/volunteering')
const graphql = require('graphql');
const database = require("../database/database");
const logger = require("../logger/logger.js")
const db = new database().db;

var addVolunteering = {
  type: graphql.GraphQLList(Volunteering),
    args: {
      user_id: {
        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    },
      event_id:{
        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
      }
    },
    resolve: function (source, args) {
      return new Promise((resolve, reject) => {
          var query = `INSERT INTO volunteering(user_id,event_id) VALUES(${args.user_id},${args.event_id});`
          logger.info(__filename +"Trying to query '"+query+"'")
          db.run(query, function(err, rows) {
              if(err){
                  logger.error(err);
                  reject(err);
              }
              logger.info(__filename +" '"+query+"' successfully queried")
              resolve(rows);
          });
      });
  }
}

var deleteVolunteering = {
  type: graphql.GraphQLList(Volunteering),
  args: {
    user_id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
  },
    event_id:{
      type: new graphql.GraphQLNonNull(graphql.GraphQLString)
    }
  },
    resolve: function (source, args) {
      return new Promise((resolve, reject) => {
          var query = `DELETE FROM volunteering where user_id="${args.user_id}" and event_id="${args.event_id}";`
          logger.info(__filename +"Trying to query '"+query+"'")
          db.run(query, function(err, rows) {
              if(err){
                  logger.error(err);
                  reject(err);
              }
              logger.info(__filename +" '"+query+"' successfully queried")
              resolve(rows);
          });
      });
  }
}

module.exports = {addVolunteering,deleteVolunteering};