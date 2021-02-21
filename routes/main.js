const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/mainController');

router.get ('/', mainController.index);

router.get ('/register', mainController.register);

router.get ('/login', mainController.login);

router.get ('/carrito', mainController.carrito);

router.get ('/leonidas', mainController.leonidas);

router.get ('/helena', mainController.helena);

router.get ('/anaxandro', mainController.anaxandro);

router.get ('/bandas', mainController.bandas);

router.get ('/speedrope', mainController.speedRope);

module.exports = router;