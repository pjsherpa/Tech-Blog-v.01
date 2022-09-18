// if not in session moved to /login if loggedin invoke next()
const withAuth = (req, res, next) =>
  !req.session.loggedIn ? res.redirect("/login") : next();
