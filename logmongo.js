var mongoose = require('mongoose') 
  , Schema = mongoose.Schema
  , util = require('util')
  ;

exports.connect = function(dburl, callback) {
  mongoose.connect(dburl);
}

exports.disconnect = function(callback) {
  mongoose.disconnect(callback);
}

LogSchema = new Schema({
   ts        : Date,
   msg       : String,
   type      : Number
});

var Logger = mongoose.model('Logger', LogSchema);

exports.log = function(msg, type) {
  var newLog = new Logger();
  newLog.ts = new Date();
  newLog.msg = msg;
  newLog.type = type;
  newLog.save(function(err) {
    if (err) {
      util.log('FATAL '+ err);
    }
  });
}

exports.forAll = function(doEach, done) {
  Logger.find({}, function(err, docs) {
    if (err) {
      util.log('FATAL '+ err);
      done(err, null);
    }
    docs.forEach(function(doc) {
      doEach(null, doc);
    });
    done(null);
  });
}

exports.lastLog = function(type, callback){
  Logger.findOne({ type: type }).sort("-ts").findOne(function(err, doc) {
    if (err) {
      util.log('FATAL '+ err);
      callback(err, null);
    }
    if (doc===null){
      doc = { name: new Date(), msg: "", type: 0 };
    }
    callback(err, doc);
  });
}