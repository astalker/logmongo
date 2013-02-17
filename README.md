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

## License 

(The MIT License)

Copyright (c) 2013 Alasdair Stalker alasdair@asta.org.uk

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
