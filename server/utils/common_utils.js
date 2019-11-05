let mongodb = require('mongodb');
let app = require('../server.js');

class CommonUtils {

    constructor() {

    }

    getRandomNumber(length) {
        return Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
    };

    validateSelectorCombination(req, callback) {
        let selector = req.selector;
        let validator = req.validator;
        let userId = req.userId;
        if(!(selector && validator && userId)) {
            callback(false);
            return;
        }

        let Login = app.models.Login;

        Login.findById(userId, {include: ['user', 'account']}, function (err, user) {
            if (err) {
                console.log('Authentication for the request - '+ req.requestId + 'for the user - ' + req.userId + ' failed with ' +
                    'error =  ' + err);
                callback(false);
                return;
            } else if (user && user.loggedInDevices) {

                let userId = user.id;
                let status = false;

                let loggedInDevices = user.loggedInDevices;

                for (let i = 0; i < loggedInDevices.length; i++) {
                    let device = loggedInDevices[i];

                    if (device.validator == validator && device.selector == selector) {
                        status = true;
                        break;
                    }
                }
                callback(status, JSON.stringify(user));
            } else {
                callback(false);
            }
        });
    };

    isEmptyObject(obj) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    };

    getValidatorAndSelectorCombinationFromRequest(req) {
        let request = {};
        request.requestId = req.requestId;
        if(req.query.validator != undefined && req.query.selector != undefined && req.query.userId != undefined){
            request.validator = req.query.validator;
            request.selector = req.query.selector;
            request.userId = req.query.userId;
        } else if (!this.isEmptyObject(req.headers.cookie)) {
            let cookieList = req.headers.cookie.split("; ");
            let cookies = {};
            for(let i=0; i < cookieList.length; i++){
                var c = cookieList[i].split("=");
                if(c.length>=2)
                    cookies[c[0]] = c[1];
            }
            request.validator = cookies.validator;
            request.selector = cookies.selector;
            request.userId = cookies.userId;
        }
        return request;
    };
};

module.exports = new CommonUtils();
