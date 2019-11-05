module.exports = function () {
    return function authenticateRequest(req, res, next) {
        let commonUtils = require('../utils/common_utils.js');
        let logger = require('../logging/log_manager.util.js');

        let request = commonUtils.getValidatorAndSelectorCombinationFromRequest(req);

        commonUtils.validateSelectorCombination(request, function (status, user) {
            if(status) {
                req.auth = {};
                req.auth.userDetails = user;
                req.auth.authStatus = status;
                logger.info(`User ${user.id} is authorized for the request ${req.requestId}`, req.requestId);
                next();
            } else {
                logger.error(`User ${user.id} is not authorized for the request ${req.requestId}`, req.requestId);
                let response = {};
                response.auth = {};
                response.auth.authStatus = false;
                res.send(response);
                return;
            }
        });
    };
}
