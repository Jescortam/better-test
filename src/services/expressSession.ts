import MongoStore from 'connect-mongo';

const store = new MongoStore({
  mongoUrl: process.env.MONGODB_CONNECTION_STRING,
});

store.on('error', (e) => {
  console.log('SESSION STORE ERROR', e);
});

const sessionConfig = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  resave: false,
  saveUninitialized: false,
  store,
  cookie: {
    httpOnly: true,
    maxAge: 3600000 * 24,
  },
};

export default sessionConfig;
