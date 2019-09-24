const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session');
const routes = require('./routes');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;


const app = express();
/* Session Set Up */
app.use(session({secret: 'todotopsecret'}))

app.use(function(req,res,next){
	if(typeof(req.session.todolist == 'undefinded')){
		req.session.todolist = [];
	}
	next();
})
.use('/', routes());


app.listen(port, () => console.log(`Example app listening on port ${port}!`))