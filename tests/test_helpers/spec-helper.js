var request = require("request"),
    Requester;

Requester = (function() {
    function Requester() {}

    Requester.prototype.get = function(path, callback) {
        return request("http://localhost:3000" + path, callback);
    };

    Requester.prototype.post = function(path, body, callback) {
        return request.post({
            url: "http://localhost:3000" + path,
            body: body
        }, callback);
    };

    return Requester;
})();

exports.withServer = function(callback) {
    var app, appMod, stopServer;

    asyncSpecWait;
    app = require("../../app");

    stopServer = function() {
        app.close();
        return asyncSpecDone();
    };

    app.listen(3000);
    return callback(new Requester, stopServer);
};
