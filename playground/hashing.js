const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

var password='123abc!';

// bcrypt.genSalt(10, (error, salt)=>{
//   bcrypt.hash(password, salt, (error, hash)=>{
//     console.log(hash);
//   });
// });


var hashedPassword='$2a$10$Du6XioeGV/T2bxVlyEySceVq8lJuFy.JJFfGbeDsnE4S5TvfnMNEW';

bcrypt.compare('123abc', hashedPassword, (error, res)=>{
  console.log(res);
});

//
// var data={
//   id:10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('Decoded:', decoded);

// var message ='I am user number 3';
// var hash=SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data={
//   id: 4
// };
//
// var token={
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// var resultHash=SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// // token.data.id=5;
// // token.hash=SHA256(JSON.stringify(token.data)).toString();
//
// if(resultHash === token.hash){
//   console.log('Data not changed');
// } else {
//   console.log('Data was changed. Dont trust');
// }
