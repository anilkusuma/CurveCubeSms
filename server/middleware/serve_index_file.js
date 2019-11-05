var path = require('path');

module.exports = function() {
    return function(req, res){
        res.sendFile(path.resolve('./client/index.html'));
    }
}
