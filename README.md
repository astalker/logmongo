# LOGMONGO

Simple logging for Node using MongoDB.

## Installation

    $ npm install logmongo

## Usage

Add the following to your main script and specify your login details for the Admin.

    var logger = require('logmongo');
    logger.connect('mongodb://localhost/log');
    logger.log('login', 1);

If your App already connects to Mongo then you can use the same Database and miss out the connect call.

To display existing logs:

    var util = require('util'), log = require('logmongo.js');
    log.connect('mongodb://localhost/log');
    log.forAll(function(error, row) {
        util.log('ROW: ' + util.inspect(row));
    }, function(error) {
        if (error) throw error;
        util.log('ALL DONE');
        log.disconnect(function(err) { });
    });
