
	router.get('/todo', function(req, res) {
    res.render('todo.ejs', {todolist: req.session.todolist});
	}).post('/todo/add', urlencodedParser, function(req, res){
		console.log(req.body);
		if(req.body.newtodo != ""){
			//will now need to call a function here
			req.session.todolist.push(req.body.newtodo);
		}
	});





module.exports = router;

