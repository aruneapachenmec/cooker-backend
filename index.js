require('dotenv').config();
const express = require('express');
const app = express();

const logger = require('morgan');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];
const userRouter = require('./routes/user.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (environment !== 'production') {
  app.use(logger('dev'));
}


mongoose.connect(`mongodb+srv://aruneapachen:${process.env.MONGO_PASSWORD}@cluster0-yemno.mongodb.net/test?retryWrites=true&w=majority`,
                  { useNewUrlParser: true, useUnifiedTopology: true,
                  useCreateIndex: true } )

app.get('/', (req, res) => {
  res.send({hello: 'world' })
});

app.use('/api/v1/users', userRouter);

app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});


                  