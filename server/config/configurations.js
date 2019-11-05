module.exports.new = function() {
    let Endpoints = require('./endpoint_configurations.js');
    let config = {
        'END_POINTS' : Endpoints
    }
    return config;
};
