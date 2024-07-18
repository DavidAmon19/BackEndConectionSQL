const express                           = require("express");
const router                            = express.Router();
const professoresController             = require("../controllers/professoresController");


router.get('/', professoresController.buscarProfessores);



module.exports = router;