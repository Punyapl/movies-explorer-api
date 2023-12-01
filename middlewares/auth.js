const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = require('../utils/constants');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Для выполнения действия необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'secretkey');
  } catch (err) {
    return next(new UnauthorizedError('Для выполнения действия необходима авторизация'));
  }

  req.user = payload;
  return next();
};
