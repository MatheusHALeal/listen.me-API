const Recomendation = require('./recomentation')

exports.getAll = (req, res, next) => {
    Recomendation.find((err, recomendation) => {
        if (err) return console.error(err);
        res.status(200).send(recomendation);
    })
};

exports.get = (req, res, next) => {
    Recomendation.findById(req.params.id, function (err, recomendation) {
        if (err) return console.error(err);
        console.log(recomendation)
        res.status(200).send(recomendation);
    })
};

exports.post = (req, res, next) => {
    const newRecomendation = new Recomendation(req.body);
    newRecomendation.save((err, newRecomendation) => {
        if (err) return console.error(err);
        res.status(201).send(newRecomendation);
    });
}

exports.put = function (req, res, next) {
    Recomendation.findById(req.params.id, (err, recomendation) => {
        recomendation.rating = req.body.rating;
        recomendation.comment = req.body.comment;
        recomendation.idSource = req.body.idSource;
        recomendation.idTarget = req.body.idTarget;
        recomendation.type = req.body.type;
        recomendation.music = req.body.music;    
        recomendation.save((err, newRecomendation) => {
            res.status(201).send(newRecomendation);
        })
    })
}
