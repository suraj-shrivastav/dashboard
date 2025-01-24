const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/admin/dashboard',
    createProxyMiddleware({
      target: 'https://api.socialverseapp.com',
      changeOrigin: true,
      secure: false,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173',
      },
    })
  );
};
