module.exports = function (Vehicle) {
    Vehicle.getVehiclesOfUser = function (req, res, next) {
        let userId = req.query.userId;
        let accountId = req.query.accountId;
        Vehicle.find({where: {'and': [{'accountId': accountId}, {'userId': userId}]}}, {strictObjectIDCoercion: true},
                function (err, vehicles) {
            if (vehicles.length != 0) {
                result = {};
                result.responseData = vehicles;
                result.returnStatus = "SUCCESS";
                res.send(result);
            } else {
                result = {};
                result.returnStatus = "EMPTY";
                res.send(result);
            }
        });
    };
    Vehicle.remoteMethod(
        'getVehiclesOfUser',
        {
            isStatice: true,
            accepts: [
                {arg: 'req', type: 'object', 'http': {source: 'req'}},
                {arg: 'res', type: 'object', 'http': {source: 'res'}},
            ],
            http: {path: '/UserVehicles', verb: 'get'}
        }
    );

    Vehicle.getVehiclesOfAccount = function (req, res, next) {
        let accountId = req.query.accountId;
        Vehicle.find({where: {'accountId': accountId}}, {strictObjectIDCoercion: true}, function (err, vehicles) {
            if (vehicles.length != 0) {
                result = {};
                result.responseData = vehicles;
                result.returnStatus = "SUCCESS";
                res.send(result);
            } else {
                result = {};
                result.returnStatus = "EMPTY";
                console.log("error is" + err);
                res.send(result);
            }
        });
    };
    Vehicle.remoteMethod(
        'getVehiclesOfCompany',
        {
            isStatice: true,
            accepts: [
                {arg: 'req', type: 'object', 'http': {source: 'req'}},
                {arg: 'res', type: 'object', 'http': {source: 'res'}},
            ],
            http: {path: '/AccountVehicles', verb: 'get'}
        }
    );

    Vehicle.assignDevice = function (req, res, next) {
        let imei = req.query.imei;
        let vehicleId = req.query.vehicleId;
        Vehicle.updateAll({'id': vehicleId}, {'imei':imei}, function (err, updateInfo) {
            if(err) {
                result = {};
                result.returnStatus = 'ERROR';
                console.log('Failed while assiging device with error = '+err);
                res.send(result);
            } else if(info.count == 1) {
                result = {};
                result.returnStatus = 'SUCCESS';
                res.send(result);
            } else {
                result = {};
                result.returnStatus = 'ERROR';
                res.send(result);
            }
        });
    };

    Vehicle.remoteMethod(
        'assignDevice',
        {
            isStatice: true,
            accepts: [
                {arg: 'req', type: 'object', 'http': {source: 'req'}},
                {arg: 'res', type: 'object', 'http': {source: 'res'}},
            ],
            http: {path: '/AssignDevice', verb: 'get'}
        }
    );

    Vehicle.createVehicle = function (req, res, next) {
        var object = req.body;
        var vehicle = {};

        if (object.registrationNumber != null || object.registrationNumber != null) {
            vehicle.registrationNumber = object.registrationNumber;
        } else {
            result = {}
            result.returnStatus = "ERROR";
            res.send(result);
            return;
        }

        if (object.type != null || object.type != null) {
            vehicle.type = object.type;
        } else {
            vehicle.type = 'SCHOOL_BUS';
        }

        vehicle.userId = object.userId;
        vehicle.companyId = object.accountId;
        vehicle.model = object.model;
        vehicle.odometer = object.odometer;
        vehicle.serviceDetails = object.serviceDetails;
        vehicle.insurenceDetails = object.insurenceDetails;
        vehicle.ownerDetails = object.ownerDetails;
        vehicle.applicationSpecificInformation = object.applicationSpecificInformation;

        Vehicle.create(vehicle, function (err, obj) {
            if (err) {
                result = {}
                console.log('Vehicle creation failed for userId = ' + object.userId
                    + ' accountId = '+object.accountId +' with error = ' + err);
                result.returnStatus = "ERROR";
                result.response = err;
                res.send(result);
            } else if (obj == null) {
                result = {}
                result.returnStatus = "ERROR";
                res.send(result);
            } else {
                result = {}
                result.returnStatus = "SUCCESS";
                res.send(result);
            }
        });
    };
    Vehicle.remoteMethod(
        'createVehicle',
        {
            isStatice: true,
            accepts: [
                {arg: 'req', type: 'object', 'http': {source: 'req'}},
                {arg: 'res', type: 'object', 'http': {source: 'res'}},
            ],
            http: {path: '/CreateVehicle', verb: 'post'}
        }
    );

    Vehicle.deleteVehicle = function(req,res,next){
        var result = {};
        Device.destroyById(req.query.vehicleId, function(err){
            if(err){
                result = {};
                result.returnStatus = "ERROR";
                res.send(result);
            }else{
                result = {};
                result.returnStatus = "SUCCESS";
                res.send(result);
            }
        });
    };
    Vehicle.remoteMethod('deleteVehicle',
        {
            isStatice:true,
            accepts:[
                { arg:'req' ,type:'object','http':{source:'req'}},
                { arg:'res' ,type:'object','http':{source:'res'}},
            ],
            http:{path:'/DeleteVehicle',verb:'get'}
        }
    );
}
