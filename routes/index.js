const router = require('express').Router();

const { createUser, login } = require('../controllers/user');

const auth = require('../middlewares/auth');

const { validateLogin, validateCreateUser } = require('../middlewares/validation');

const movieRouter = require('./movies');
const usersRouter = require('./users');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', validateLogin, login);
router.post('/signup', validateCreateUser, createUser);

router.use('/', auth, usersRouter);
router.use('/', auth, movieRouter);

router.all('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес запроса'));
});

module.exports = router;
