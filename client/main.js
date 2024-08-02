// // this is client.

// const rvUser = new ReactiveVar([])

// Meteor.call('getUsers', function(err, rslt){
//     console.log(rslt);
// })

// Template.main.helpers({
//     users: function() {

//     }
// });


Posts = new Mongo.Collection('posts');

Template.main.helpers({
    posts: function() {
        return Posts.find().fetch()
    }
    });
