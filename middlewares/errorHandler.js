module.exports = (err, req, res, next) => {
  const { status = 500 } = err;
  let { message } = err;
  if (status === 500) {
    message = 'Ошибка на сервере';
  }
  res.status(status).send({ message });

  next();
};
