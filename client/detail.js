//detail로 우리가 정해준 것. b로 해도 됨
//postId도 우리가 정해준 것. c로 해도 됨

FlowRouter.route('/detail/:postId', {
    action:function() {
        BlazeLayout.render('layout', {main: 'detail'});
        }
    });

    //detail도 우리가 정해준 것. b로 해도됨.
Template.detail.helpers({
    //post는 우리가 정해준 것. a로 해도됨.    
    //postId도 우리가 정해준 것. c로 해도 됨
    post() {
            const postId = FlowRouter.getParam('postId');
            return Posts.findOne(postId);
    }
});

Template.detail.events({
    'click #remove': function() {
        //데이터베이스에서 현재 글을 삭제 한다.
        if (confirm('정말 삭제하시겠습니까?')) {
            //삭제함을 선택한 경우
            const postId = FlowRouter.getParam('postId');
            Posts.remove(postId);
        } else {
            //삭제안함을 선택한 경우
            return;
        }

        //이전 목록으로 돌아간다.
        FlowRouter.go('/');

    }
})