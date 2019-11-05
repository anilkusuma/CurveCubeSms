module.exports = function () {
    let uuid = require('uuid/v4');
    const logger = require('../logging/log_manager.util.js');
    return function authenticateRequest(req, res, next) {
        req.requestId = uuid();
        logger.info(`Request received on URL - ${req.url} with requestId ${req.requestId}`, req.requestId);
        req.requestStartTime = new Date();
        var start = process.hrtime();
        res.once('finish', function() {
            var diff = process.hrtime(start);
            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
            logger.debug(`The request processing time for requestId ${req.requestId}, is ${ms} ms.`, req.requestId);
        });
        next();
    };
}
