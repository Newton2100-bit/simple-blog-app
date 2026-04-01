const express = require('express');
const app = express();

app.use(express.json());

const userRouter = require('./routes/user');
app.use('/users', userRouter);

app.listen(3001, () => {
	console.log('User service running on port 3001');
});

// user-service/routes/user.js
const router = require('express').Router();

let users = [];

router.post('/register', (req, res) => {
	const { username, password } = req.body;
	users.push({ username, password });
	res.send('User registered');
});

router.post('/login', (req, res) => {
	const { username, password } = req.body;
	const user = users.find(u => u.username === username && u.password === password);
	if (user) return res.send('Login successful');
	res.status(401).send('Invalid credentials');
});

router.post('/logout', (req, res) => {
	res.send('Logged out');
});

router.get('/', (req, res) => {
	res.json(users);
});

module.exports = router;
