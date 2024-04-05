require('dotenv').config();
const express = require('express');
const app = express();
const todoRouter = require('./router/todo');
const userRouter = require('./router/user')
const port = process.env.PORT || '3100';
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use('/v1/todos', todoRouter);
app.use('/v1/users', userRouter);

app.listen(port, () => {
  console.log('Server Connected on PORT: ' + port);
});
