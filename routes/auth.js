const router = require('express').Router();
const bcrypt = require('bcrypt');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const { User } = require('../db/models');

const Register = require('../views/auth/Register');

router.get('/register', (req, res) => {
  const element = React.createElement(Register, {});
  const html = ReactDOMServer.renderToStaticMarkup(element);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ where: { username } });
  // проверяем есть ли уже такой пользователь в БД
  if (existingUser) {
    res.send('Такой пользователь уже есть');
  }

  if (!existingUser) {
    const user = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    console.log(user);
    req.session.userId = user.id;
  }
  res.redirect('/');
});

// router.get('/login', (req, res) => {

// });

module.exports = router;
