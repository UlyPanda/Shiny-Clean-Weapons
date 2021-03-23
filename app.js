const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const weaponsRouter = require('./routes/weapons');
const { logger } = require('./middleware/index')

const app = express();
require('dotenv').config();
const port = process.env.PORT || 4001;

app.use(bodyParser.json());
app.use(logger);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/weapons', weaponsRouter);

app.get('/', (req, res) => {
  res.send('Shiny clean weapons server!');   
});

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});