Meteor.publish('Tournament', function () {
  return Tournament.find();
});
