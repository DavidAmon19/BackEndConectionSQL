const mysql2 = require("mysql2/promise");


const executar = async (sql) =>{
    let conexao = await mysql2.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: process.env.PORT_SQL
    })

    let [result] = await conexao.query(sql);

    return result;

}

module.exports = {
    executar
};