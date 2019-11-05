const moment = require('moment-timezone');
const app = require('../server.js');
class Logger {
    constructor(moment, app, appName) {
        this.moment = moment;
        this.logLevel = app.get("logLevel");
        this.appName = appName;
    }

    //LogLevels - ERROR - 5, WARN - 4, INFO - 3, DEBUG - 2, TRACE - 1

    error(message, requestId) {
        let now = this.moment().tz('Asia/Calcutta').format('YYYY-MM-DD HH:mm:ss');
        if(this.logLevel <= 5) console.log(`${this.appName} :: ERROR :: ${now} :: ${requestId} :: ${message}`);
    }

    info(message, requestId) {
        let now = this.moment().tz('Asia/Calcutta').format('YYYY-MM-DD HH:mm:ss');
        if(this.logLevel <= 3) console.log(`${this.appName} :: INFO :: ${now} :: ${requestId} :: ${message}`);
    }

    debug(message, requestId) {
        let now = this.moment().tz('Asia/Calcutta').format('YYYY-MM-DD HH:mm:ss');
        if(this.logLevel <= 2) console.log(`${this.appName} :: DEBUG :: ${now} :: ${requestId} :: ${message}`);
    }
};

module.exports = new Logger(moment, app, "CurveCubeCommons");
