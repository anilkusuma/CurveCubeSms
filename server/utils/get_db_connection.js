let mongodb = require('mongodb');
let app = require('../server.js');

class Database {


    constructor() {
        this.connectionStatus = 'CONNECTING';
        this.connect();
    }

    connect() {
        let mongodbConfig = app.datasources.CurveCubeCommons.settings;
        let connectionUrl = 'mongodb://'+mongodbConfig.user+ ':' +mongodbConfig.password
                + '@' + mongodbConfig.host+':' + mongodbConfig.port + '/' + mongodbConfig.database
                + '?authSource='+ mongodbConfig.authSource;

        let database = this;
        mongodb.MongoClient.connect(connectionUrl, {native_parser:true}, function (err, db) {

            if(err == null) {
                database.connectionStatus = 'CONNECTED';
                database.database = db;
                console.log('MongoDb Database connection successful')
            } else {
                database.connectionStatus = 'FAILED';
                console.error('MongoDb Database connection failed with error '+err);
            }
        });
    };

    onConnection(callback) {
        if(this.connectionStatus == 'CONNECTING') {
            setTimeout(this.onConnection.bind(this),50, callback);
        } else {
            callback(this.connectionStatus);
        }
    }
};

module.exports = new Database()
