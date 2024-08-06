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
//Posts 우리가 정한 것. posts도 우리가 정한 것. 서버랑 이름같게 다른 걸로 해 됨
Posts = new Mongo.Collection('posts');
Template.main.helpers({
    posts: function() {
        return Posts.find().fetch()
    }
    });
