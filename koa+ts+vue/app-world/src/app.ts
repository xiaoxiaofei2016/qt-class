import 'reflect-metadata';
import { useControllers } from 'koa-controllers';
import Koa = require('koa');

const app = new Koa();
useControllers(app, __dirname + '/controllers/*.ts', {
  multipart: {
    dest: './uploads'
  }
});
app.listen(3000, () => {
  console.log('server is running 3000');
});