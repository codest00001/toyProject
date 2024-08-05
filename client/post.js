FlowRouter.route('/post', {
    action: function(){
        BlazeLayout.render('layout', {main: 'post'});
    }
})

Template.post.events({
    'click #save': function(event){
        // #save button 클릭 시 실행 됨.
        // [id=save]로 쓰는 것과 #save과 같음
        //
        //   <실행단계 구상하기>
        // 1. #title인 input 에서 제목을 가져옴
        const title = $('#title').val()
        
        // 2. #content인 textarea에서 콘텐츠 가져옴
        const content = $('#content').val()
        
        // 3. 가져온 데이터를 json으로 DB에 저장
        const json = {
            title : title,
            content : content,
            createdAt : new Date()
        }
        console.log(json);        
        Posts.insert(json);
        

        // 4. 다시 목록화면(home)으로 돌아감
        FlowRouter.go('/');

     alert('Save 되었습니당 😎');    }
})

