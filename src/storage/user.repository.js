var User = require("../user/user.js");
//var recommendation = require("../recommendation/recommendation.js");

/*
 *    FINDS
 */

exports.findUsers = () => {
  let users = User.find({}).exec();
  return users;
};

exports.findUserById = userId => {
  let user = User.findById(userId)
    //    .populate("_recommendation")
    .populate("_followers")
    .populate("_following")
    .exec();

  return user;
};

exports.findUserByProfileName = profileName => {
  let user = User.find({ profile_name: profileName })
    //  .populate("_recommendation")
    .populate("_followers")
    .populate("_following")
    .exec();

  return user;
};

/*
 *    CREATES/UPDATES
 */

exports.createUser = async body => {
  let user = new User(body);
  user.username = body.username;
  user.password = body.password;

  return user.save();
};

exports.updateUser = (id, body) => {
  let user = User.updateOne({ _id: id }, { $set: body }).exec();

  return user;
};

exports.follow = (userId, newUserId) => {
  User.findOneAndUpdate(
    { _id: newUserId },
    { $addToSet: { _followers: userId } }
  ).exec();

  return User.findOneAndUpdate(
    { _id: userId },
    { $addToSet: { _following: newUserId } }
  ).exec();
};

exports.unfollow = (userId, newUserId) => {
  User.findOneAndUpdate(
    { _id: newUserId },
    { $pull: { _followers: userId } }
  ).exec();
  return User.findOneAndUpdate(
    { _id: userId },
    { $pull: { _following: newUserId } }
  ).exec();
};

exports.recommend = (idUser, idRecommendation) =>
  User.findOneAndUpdate(
    { _id: idUser },
    { $addToSet: { _recommendations: idRecommendation } }
  ).exec();