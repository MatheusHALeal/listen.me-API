const Music = require('./music')

exports.getAll = (req, res, next) => {
    Music.find((err, music) => {
        if (err) return console.error(err);
        res.status(200).send(music);
    })
};

exports.get = (req, res, next) => {
    Music.findById(req.params.id, function (err, music) {
        if (err) return console.error(err);
        console.log(music)
        res.status(200).send(music);
    })
};

exports.post = (req, res, next) => {
    const newMusic = new Music(req.body);
    newMUsic.save((err, newUser) => {
        if (err) return console.error(err);
        res.status(201).send(newMusic);
    });
}

exports.put = function (req, res, next) {
    Music.findById(req.params.id, (err, user) => {
        music.name = req.body.name;
        music.artist = req.body.artist;
        music.save((err, newMusic) => {
            res.status(201).send(newMusic);
        })
    })
}
