// this is client.

const rvUser = new ReactiveVar([])

Meteor.call('getUsers', function(err, rslt){
    console.log(rslt);
})

Template.main.helpers({
    users: function() {

    }
});

