import dotenv from 'dotenv';
import express from 'express'
import http from 'http';
import logger from 'morgan'
import path from 'path'
import { router } from './routes/router'
import { auth } from 'express-openid-connect'
import { authConfig, responseError } from './types';

dotenv.config({ path: path.resolve(__dirname, '../.env') })
const app = express();

app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const port = process.env.PORT || 3000;
const config: authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET || 'secret key',
  baseURL: `http://localhost:${port}`,
  clientID: process.env.CLIENT_ID
};
console.log(config);

if (!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
  config.baseURL = `http://localhost:${port}`;
}

app.use(auth(config));

// Middleware to make the `user` object available for all views
app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use('/', router);

// Catch 404 and forward to error handler


app.use(function (req, res, next) {
  const err: responseError = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handlers
app.use(function (err: any, req: any, res: any, next: any) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: process.env.NODE_ENV !== 'production' ? err : {}
  });
});

http.createServer(app)
  .listen(port, () => {
    console.log(`Listening on ${config.baseURL}`);
  });
