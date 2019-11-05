let app = require('../server.js');
let Endpoints = {
    development: {
        COMMONS_URL : 'http://0.0.0.0:7102/',
        PACKET_RECEIVER_URL: 'http://0.0.0.0:7101/',
        VTS_URL: 'http://0.0.0.0:7103/',
        SMS_URL: 'http://0.0.0.0:7104/'
    },
    production: {
        COMMONS_URL : 'http://commons.curvecube.in/',
        PACKET_RECEIVER_URL: 'http://packet.curvecube.in/',
        VTS_URL: 'http://vts.curvecube.com',
        SMS_URL: 'http://sms.curvecube.com'
    }
};

module.exports = Endpoints[app.get('env')];
