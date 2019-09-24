exports.addToDo = function(req,res,toDoList){
	if(req.body.newtodo != ""){
		//will now need to call a function here
		req.session.todolist.push(req.body.newtodo);
	}

};