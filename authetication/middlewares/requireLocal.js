const passport = require('passport');
require('../services/passport');
const requireLocal = passport.authenticate('local', {session: false, failWithError: true});

module.exports = requireLocal;