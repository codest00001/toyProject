
FlowRouter.route('/edit/:postId', {
    action: function() {
        BlazeLayout.render('layout', {main: 'edit'});
        }
    });


Template.edit.helpers({
    post() {
        const postId = FlowRouter.getParam('postId');
        return Posts.findOne(postId);
}
});


Template.edit.events({
    'click #save': function(event){
        const postId = FlowRouter.getParam('postId');
        const title = $('#title').val()
        const content = $('#content').val()
        
    if(title.length <= 0 || content.length <= 0){
        return  alert('제목/내용을 입력해주세요');
        }
        const json = {
            title : title,
            content : content,
        }
                
        Posts.update(postId, {
            $set:{
                title,
                content,
            }
    });
        
        FlowRouter.go('/');
    }
})

