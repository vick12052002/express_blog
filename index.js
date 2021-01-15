const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const path = require('path');

const postController = require('./controllers/post');
const userController = require('./controllers/user');

const app = express();
const port = process.env.PORT || 5001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(flash());

app.use(
  session({
    secret: process.env.BLOG,
    resave: false,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  res.locals.username = req.session.username || false;
  res.locals.userId = req.session.userId || false;
  res.locals.isAtSystem = false;
  res.locals.errorMessage = req.flash('errorMessage');
  res.locals.infoMessage = req.flash('infoMessage');
  next();
});

app.use('/system', function checkAuthority(req, res, next) {
  if (!res.locals.username) {
    req.flash('errorMessage', '你沒有權限');
    return res.redirect('/');
  }
  res.locals.isAtSystem = true;
  next();
});

function redirectBack(req, res) {
  res.redirect('back');
}

app.get('/', userController.homePage);
app.get('/about-me', userController.aboutMe);
app.get('/category', userController.category);

app.get('/list', userController.list);
app.get('/login', userController.login);
app.post('/login', userController.handleLogin, redirectBack);
app.get('/logout', userController.logout);

app.get('/register', userController.register);
app.post('/register', userController.handleRegisterUser, redirectBack);

app.get('/page/:id', postController.getPost);
app.get('/system', userController.system);

app.get('/system/add-post', postController.addPost);
app.post('/system/add-post', postController.handlesAddPost, redirectBack);

app.get('/system/delete-post/:id', postController.deletePost);
app.get('/system/update-post/:id', postController.updatePost);
app.post('/system/update-post/:id', postController.handleUpdatePost);

app.get('/system/add-category', postController.addCategory);
app.post('/system/add-category', postController.handleAddCategory, redirectBack);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
