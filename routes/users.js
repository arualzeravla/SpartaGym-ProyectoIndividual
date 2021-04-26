const express = require ('express');
const router = express.Router();

const usersController = require ('../controllers/usersController');

router.get ("/registrarse", usersController.register);

router.get ("iniciarSesion", usersController.login);

module.exports = router;