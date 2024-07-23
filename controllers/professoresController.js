const database = require("../config/conexaoConfig");
const TABLE = "tb_professor";

const buscarDados = async (req, res) => {
  let dados = await database.executar(`SELECT * FROM ${TABLE}`);

  res.send(dados);
};

const buscarPorId = async (req, res) => {
  let id = req.params.id;

  let dados = await database.executar(
    `SELECT * FROM ${TABLE} WHERE id = ${id}`
  );

  res.send(dados);
};

const inserirDados = async (req, res) => {
  let { name, email, password } = req.body;

  let dados = await database.executar(
    `INSERT INTO ${TABLE}(name, email, password)
        VALUES
        ('${name}', '${email}', '${password}');`
  );

  req.body.id = dados.insertId;

  res.send(req.body);
};

const atualizarDados = async (req, res) => {
  let { id } = req.params;
  let { name, email, password } = req.body;

  //   if (!name){
  //     let dados = await database.executar(`UPDATE ${TABLE}
  //         SET  email = '${email}', password = '${password}'
  //         WHERE id = ${id}
  //         `);
  //   } else if (!email){
  //     let dados = await database.executar(`UPDATE ${TABLE}
  //         SET  name = '${name}', password = '${password}'
  //         WHERE id = ${id}
  //         `);
  //   } else {

  //   }
  let dados = await database.executar(`UPDATE ${TABLE} 
             SET  name = '${name}',email = '${email}', password = '${password}'
             WHERE id = ${id}
            `);



  res.send(req.body);
};

const deleteDados = async (req, res) =>{
    let id = req.params.id;

    let dados = await database.executar(`DELETE FROM ${TABLE} WHERE id = ${id}`);

    res.send(dados);
}

module.exports = {
  buscarDados,
  buscarPorId,
  inserirDados,
  atualizarDados,
  deleteDados
};
