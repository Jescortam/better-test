import session from 'express-session';
import MongoStore from 'connect-mongo';

const store = new MongoStore({
  mongoUrl: process.env.MONGODB_CONNECTION_STRING,
});

store.on('error', (e) => {
  console.log('SESSION STORE ERROR', e);
});

const sessionConfig: session.SessionOptions = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  store,
  cookie: {
    httpOnly: true,
    sameSite: 'none',
    maxAge: 3600000 * 24,
  },
};

export default sessionConfig;
