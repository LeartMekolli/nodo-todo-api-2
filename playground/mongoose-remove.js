const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findOneAndRemove({_id: '5e4bdeebb48a9becdbbfa80f'}).then((todo)=>{
//
// });

Todo.findByIdAndRemove('5e4bdeebb48a9becdbbfa80f').then((todo)=>{
  console.log(todo);
});
