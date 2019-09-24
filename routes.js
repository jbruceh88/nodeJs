
module.exports = function(app,urlencodedParser){
	const toController = require('./controllers/toDoController.js');
	
	app.get('/todo', function(req, res, next) {
		res.render('todo.ejs', {todolist: req.session.todolist});
		console.log(req.session.todolist);
	}).post('/todo/add', urlencodedParser, function(req, res, next){
		toController.addToDo(req,res);
		res.redirect('/todo');
	
	});
}







