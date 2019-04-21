const User = require('./user')

exports.getAll = (req, res, next) => {
    User.find((err, user) => {
        if (err) return console.error(err);
        res.status(200).send(user);
    })
};

exports.get = (req, res, next) => {
    User.findById(req.params.id, function (err, user) {
        if (err) return console.error(err);
        console.log(user)
        res.status(200).send(user);
    })
};

exports.post = (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save((err, newUser) => {
        if (err) return console.error(err);
        res.status(201).send(newUser);
    });
}

exports.put = function (req, res, next) {
    User.findById(req.params.id, (err, user) => {
        user.name = req.body.name;
        user.login = req.body.login;
        user.user = req.body.user;
        user.password = req.params.password;
        user.save((err, newUser) => {
            res.status(201).send(newUser);
        })
    })
}
