var exec = require('cordova/exec');

var mDNS = {
	query: function (host, multicastIP, port, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "MulticastDNSPlugin", "query", [host, multicastIP, port]);
    }
};

module.exports = mDNS;