module.exports = function(app, passport) {

    app.post('/api/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            if (err) return next(err);
            if (!user) {
                console.log(info);
                return res.json({ message: info.message });
            }
            // Not calling req.login() since we don't want to establish a session
            return res.json({ id: user.id, email: user.local.email });
        })(req, res, next);
    });

}