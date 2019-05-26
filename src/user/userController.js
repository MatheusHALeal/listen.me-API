const recommendationController = require("../recommendation/recommendationController.js");
const userRepository = require("../storage/user.repository");

// exports.getAll = (req, res, next) => {
//     User.find((err, user) => {
//         if (err) return console.error(err);
//         res.status(200).send(user);
//     })
// };

// exports.get = (req, res, next) => {
//     User.findById(req.params.id, function (err, user) {
//         if (err) return console.error(err);
//         console.log(user)
//         res.status(200).send(user);
//     })
// };

// exports.post = (req, res, next) => {
//     const newUser = new User(req.body);
//     newUser.save((err, newUser) => {
//         if (err) return console.error(err);
//         res.status(201).send(newUser);
//     });
// }

// exports.put = function (req, res, next) {
//     User.findById(req.params.id, (err, user) => {
//         user.profile_name = req.body.profile_name;
//         user.email = req.body.email;
//         user.username = req.body.username;
//         user.password = req.body.password;
//         user.rate = req.body.rate;
//         user.img = req.body.img;
//         user.save((err, newUser) => {
//             res.status(201).send(newUser);
//         })
//     })
// }

exports.index = (req, res) => {
  userRepository
    .findUsers()
    .catch(err => {
      res.status(400).send(err);
    })
    .then(result => {
      res.status(200).json({ users: result });
    });
};

exports.show = (req, res) => {
  userRepository
    .findUserById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(400).json(error);
    });
};

exports.create = (req, res) => {
  userRepository
    .createUser(req.body)
    .then(createdUser => {
      res.status(200).json({ result: createdUser, msg: "User created." });
    })
    .catch(err => {
      if (err && err.name === "MongoError" && err.code === 11000) {
        res.status(403).json("There is already one entity with same values!");
      } else {
        res.status(400).json(err);
      }
    });
};

exports.update = (req, res) => {
  userRepository
    .updateUser(req.params.id, req.body)
    .then(updatedUser => {
      res.status(200).json({ result: updatedUser, msg: "User updated." });
    })
    .catch(error => {
      res.status(400).json(error);
    });
};

exports.follow = (req, res) => {
  userRepository
    .follow(req.params.id, req.params.f_id)
    .then(updatedUser => {
      res.status(200).json({ result: updatedUser, msg: "Following" });
    })
    .catch(error => {
      res.status(400).json(error);
    });
};

exports.unfollow = (req, res) => {
  userRepository
    .unfollow(req.params.id, req.params.f_id)
    .then(updatedUser => {
      res.status(200).json({ result: updatedUser, msg: "Unfollowed" });
    })
    .catch(error => {
      res.status(400).json(error);
    });
};

/**
 * First, create a recommedation, then update the user source recommendations
 * and update the user target recommendations.
 */
exports.recommend = (req, res) => {
  recommendationController
    .create(req, res)
    .then(created =>
      userRepository
        .recommend(req.body.idSource, created)
        .then(() => 
        userRepository.recommend(req.body.idTarget, created)).then( () =>{
          res.status(200).json({ result: created, msg: "Recommended" });
        })
    );
}
