'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  var path = require('path');
  router.get('/', function(req,res){
      res.sendFile(path.resolve('./client/index.html'));
  });
  server.use(router);
};
