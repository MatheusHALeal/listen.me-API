const Recommendation = require("../recommendation/recommendation.js");

exports.findMyRecommendations = myId =>
  Recommendations.find({ "idSource": myId }).exec();

exports.findFriendRecommendations = friendId =>
  Recommendations.find({ "idTarget": friendId }).exec();

exports.createRecommendation = async body => new Recommendation(body).save();

exports.updateRecommendation = (id, body) =>
  Recommendation.updateOne({ _id: id }, { $set: body }).exec();
