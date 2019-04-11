const repository = require("./../user/repository");
const service = require("./service");
const auth = require("./../auth/service");



exports.authenticate = async (req, res) => {
  console.log("Trying to authenticate a user");
  try {
    const email = req.body.email;
    const user = await repository.findOne({email});

    if (user) {
      const password = req.body.password;
      if (auth.isMatch(password, user.password)) {
        const payload = {
          id: user._id,
          email: user.email
        };

        const token = await service.generateToken(payload);
        const result = {user_id: payload.id};
        const key = global.accessTokenHeader;
        result[key] = token;
        res.status(200).json(result);
        console.log("User authenticated successfully!");
      } else {
        console.log("Error while trying to authenticate. Error message: Unauthorized!");
        res.status(401).send();
      }

    } else {
      console.log("Error while trying to authenticate. Error message: User not found!");
      res.status(404).send({errorMessage: "User not found."});
    }

  } catch (error) {
    console.log("Error while trying to authenticate. Error message: " + e.errorMessage);
    res.status(500).send({errorMessage: error.message});
  }


};