const express = require ('express');
const router = express.Router();

const productsController = require ('../controllers/productsController');


router.get ('/carrito', productsController.carrito);

router.get ('/leonidas', productsController.leonidas);

router.get ('/helena', productsController.helena);

router.get ('/anaxandro', productsController.anaxandro);

router.get ('/bandas', productsController.bandas);

router.get ('/speedrope', productsController.speedrope);

module.exports = router;