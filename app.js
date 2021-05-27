const express = require("express");
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const weaponsRouter = require('./routes/weapons');
const { logger } = require('./middleware/index')

const app = express();
require('dotenv').config();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(logger);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/weapons', weaponsRouter);
app.use(express.urlencoded());
// app.use(express.static("/build"))  

app.get('/', (req, res) => {
  app.use(express.static(__dirname+"/client/build/static"));
  app.use(express.static('./client/build', express.static('static')));
  res.sendFile(__dirname + "/client/build/index.html");  
});

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});