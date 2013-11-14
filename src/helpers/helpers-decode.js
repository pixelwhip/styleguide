/*! decode helper*/

(function() {
  var _ = require('lodash');

  module.exports = {
    decode: decode = function(value) {
      return _.escape(value);
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("decode", decode);
    return this;
  };

}).call(this);
