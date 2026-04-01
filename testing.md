=========================
TEST WITH CURL OR POSTMAN
=========================
Create user:
POST http://localhost:3000/users/register
{ "username": "john", "password": "123" }

Login:
POST http://localhost:3000/users/login

Create blog:
POST http://localhost:3000/blogs
{ "title": "My Blog", "content": "Hello world" }

Get all blog titles:
GET http://localhost:3000/blogs

Get one blog:
GET http://localhost:3000/blogs/1

Delete blog:
DELETE http://localhost:3000/blogs/1
