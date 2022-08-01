const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/auth', '/flashcards'],
    createProxyMiddleware({
      target: 'http://localhost:8000',
    })
  );
};
