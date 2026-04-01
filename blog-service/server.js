const router2 = require('express').Router();

let blogs = [];
let id = 1;

router2.post('/', (req, res) => {
	const { title, content } = req.body;
	const blog = { id: id++, title, content };
	blogs.push(blog);
	res.json(blog);
});

router2.get('/', (req, res) => {
	const titles = blogs.map(b => b.title);
	res.json(titles);
});

router2.get('/:id', (req, res) => {
	const blog = blogs.find(b => b.id == req.params.id);
	if (!blog) return res.status(404).send('Not found');
	res.json(blog);
});

router2.delete('/:id', (req, res) => {
	blogs = blogs.filter(b => b.id != req.params.id);
	res.send('Deleted');
});

module.exports = router2;
