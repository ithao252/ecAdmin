import session from 'express-session';
import fnMySQLStore from 'express-mysql-session';
import { connectionInfo } from '../utils/db.js';



export default function (app) {
  const MySQLStore = fnMySQLStore(session);
  const sessionStore = new MySQLStore(connectionInfo);
  app.set('trust proxy', 1) // trust first proxy
  app.use(session({
    secret: 'SECRET_KEY',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      // secure: true
    }
  }));
}