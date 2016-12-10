exports = module.exports = function(idmap, client) {
  // Load modules.
  var challenge = require('../lib/challenge');
  
  return challenge(client, idmap);
};

exports['@implements'] = [
  'http://schemas.authnomicon.org/js/login/mfa/challenge',
  'http://schemas.authnomicon.org/js/login/mfa/opt/duo/challenge'
];
exports['@singleton'] = true;
exports['@require'] = [
  './id/map',
  'http://schemas.authnomicon.org/js/login/mfa/opt/duo/Client'
];