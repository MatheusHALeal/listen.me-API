const recommedationRepository = require("../storage/recommedation.repository");

exports.getAll = (req, res, next) => {
  recommedationRepository
    .findMyRecommendations(req.params.sourceId)
    .catch(err => res.status(400).send(err))
    .then(result => res.status(200).json({ recommendations: result }));
};

exports.getAllFriend = (req, res, next) => {
  recommedationRepository
    .findMyRecommendations(req.params.targetId)
    .catch(err => res.status(400).send(err))
    .then(result => res.status(200).json({ recommendations: result }));
};

exports.create = (req, res, next) => {
  recommedationRepository
    .createRecommendation(req.body)
    .then(createdRecommedation =>
      res
        .status(200)
        .json({ result: createdRecommedation, msg: "Recommedation created." })
    )
    .catch(err => {
      if (err && err.name === "MongoError" && err.code === 11000) {
        res.status(403).json("There is already one entity with same values!");
      } else {
        res.status(400).json(err);
      }
    });
};

exports.update = function(req, res, next) {
  recommedationRepository
    .updateRecommendation(req.params.id, req.body)
    .then(updatedRecommedation =>
      res
        .status(200)
        .json({ result: updatedRecommedation, msg: "Recommedation updated." })
    )
    .catch(error => res.status(400).json(error));
};
