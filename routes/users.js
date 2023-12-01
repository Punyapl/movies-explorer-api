const router = require('express').Router();

const { validateUpdateProfile } = require('../middlewares/validation');

const { getCurrentUser, updateUser } = require('../controllers/user');

router.get('/users/me', getCurrentUser);
router.patch('/users/me', validateUpdateProfile, updateUser);

module.exports = router;
