var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('todo',['tasks']);

var {check, validationResult } = require('express-validator/check');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/tasks', [ check('subject').exists() ], function(request, response){

  var errors = validationResult(req);
  if(!errors.isEmpty()) {
    retrun res.status(422).json({errors: errors.array()});
  }
    var subject = request.body.subject;
    db.tasks.insert({subject,status:0},function(error,data){
      response.json(data);
    })
});

//curl -X POST localhost:urweb/tag -d "subject=Apple"
app.get('/tasks/:id',function(request,response){
  var id = request.params.id;
  db.tasks.find({'_id':mongojs.ObjectId(id)},function(error,data){
    response.json(data);
  });
});

app.get('/tasks',function(request,response) {

  db.tasks.find(function(error,data) {
    response.json(data);
  });

})

//curl -X DElETE localhost:urweb/tag/:id
app.delete('/tasks/:id', function (request, response){
  var id = request.params.id;
  db.tasks.remove({ '_id' : mongojs.ObjectId(id) } , function (error,data) {
    response.json(data);
  }

  })
})
app.listen(8000, function(){
  console.log('Todo Api started at port 8000.');
})
