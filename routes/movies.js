const router = require('express').Router();

const { validateCreateMovie, validateMovieDeletion } = require('../middlewares/validation');

const { getAllMovies, createMovie, deleteMovie } = require('../controllers/movie');

router.get('/movies', getAllMovies);
router.post('/movies', validateCreateMovie, createMovie);
router.delete('/movies/:movieId', validateMovieDeletion, deleteMovie);

module.exports = router;
