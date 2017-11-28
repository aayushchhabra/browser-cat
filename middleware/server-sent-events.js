/**
 * Created by achhabra on 11/27/17.
 */

module.exports = function (req, res, next) {

    res.sseSetup = function() {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
    }

    res.sseSend = function(data) {
        res.write("data: " + data + "\n\n");
    }

    next()
}

