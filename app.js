const express = require('express');
const cookieSession = require('cookie-session');

const router = express.Router();
const toController = require('./controllers/toDoController.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3000;
const app = express();

app.use(
	cookieSession(
		{
			cookieName: 'session',
			secret: 'todotopsecret',
			httpOnly: true,
            ephemeral: true,
            duration: 30 * 60 * 1000,
            activeDuration: 5 * 60 * 1000
		}
		)
	)

const routes = require('./routes')(app,urlencodedParser);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))