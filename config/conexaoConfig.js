const mysql2 = require("mysql2/promise");


const executar = async (sql) =>{
    let conexao = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_escola',
        port: '3308'
    })

    let [result] = await conexao.query(sql);

    return result;

}

module.exports = {
    executar
};