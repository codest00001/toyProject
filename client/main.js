// // this is client.

// const rvUser = new ReactiveVar([])

// Meteor.call('getUsers', function(err, rslt){
//     console.log(rslt);
// })

// Template.main.helpers({
//     users: function() {

//     }
// });

FlowRouter.route('/', {
    action: function(){
        BlazeLayout.render('layout', {main: 'main'});
    }
})



Posts = new Mongo.Collection('posts');

Template.main.helpers({
    posts: function() {
        return Posts.find().fetch()
    }
    });
