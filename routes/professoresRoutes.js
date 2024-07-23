const express                           = require("express");
const router                            = express.Router();
const professoresController             = require("../controllers/professoresController");


router.get('/', professoresController.buscarDados);
router.get('/:id', professoresController.buscarPorId);
router.post('/', professoresController.inserirDados);
router.put('/:id', professoresController.atualizarDados);
router.delete('/:id', professoresController.deleteDados);




module.exports = router;