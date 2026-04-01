const express3 = require('express');
const app3 = express3();
const { createProxyMiddleware } = require('http-proxy-middleware');

app3.use('/users', createProxyMiddleware({
	target: 'http://localhost:3001',
	changeOrigin: true
}));

app3.use('/blogs', createProxyMiddleware({
	target: 'http://localhost:3002',
	changeOrigin: true
}));

app3.listen(3000, () => {
	console.log('Gateway running on port 3000');
});
