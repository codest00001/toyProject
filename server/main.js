//디비에 데이터가 하나도 없으면 3개를 넣어라
//디비에 데이터가 하나도 없다?
//if 디비에 데이터가 하나도 없으면
//그러면 3개의 데이터를 넣어라

//디비 관련 find insert remove update 4개만 알면됨


Users = new Mongo.Collection('users');

console.log(Users.find().fetch())

if (Users.find().count() == 0) {
 console.log('데이터생성중');
  const data = [
    {                
      name: '홍길동',
      age: 10,
      address: '가나다시'
}, {
      name: '김철수',
      age: 11,
      address: '라마바시'
}, {
      name: '이영희',
      age: 12,
      address: '사아자시'
}
];

  data.forEach(function(item) {
    Users.insert(item);
  });
}