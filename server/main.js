//디비에 데이터가 하나도 없으면 3개를 넣어라
//디비에 데이터가 하나도 없다?
//if 디비에 데이터가 하나도 없으면
//그러면 3개의 데이터를 넣어라

//디비 관련 find insert remove update 4개만 알면됨


Posts = new Mongo.Collection('posts');

console.log(Posts.find().fetch())

if (Posts.find().count() == 0) {
 console.log('데이터생성중');
  const data = [
    {     
      createdAt: new Date(),
      title: '1번 테스트 제목입니당.',
      content: '이게 게시판 내용임다.'
    },
    {     
      createdAt: new Date(),
      title: '2번 테스트 제목입니당.',
      content: '이게 게시판 내용임다.'
      
    },
   {     
    createdAt: new Date(),
    title: '3번 테스트 제목입니당.',
    content: '이게 게시판 내용임다.'
    
  } 
] ;

  data.forEach(function(item) {
    Posts.insert(item);
  });
}