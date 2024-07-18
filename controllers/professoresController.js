const database = require('../config/conexaoConfig');



const buscarProfessores = async (req, res) =>{
    let dados = await database.executar(`SELECT * FROM tb_professor`);

    res.send(dados);
}



module.exports = {
    buscarProfessores
}