Meteor.publish('Restaurant', function () {
  return Restaurant.find();
});
