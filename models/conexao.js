mysql = require('mysql2/promise');

async function conectar() {
    connection = mysql.createConnection({
        host: "db4free.net",
        user: 'root1234567890',
        password: 'devilmaycry533',
        database: 'tarefas123',

    });
    return connection;
}

async function query(sql) {
    const conn = await conectar();
    const [rows] = await conn.query(sql);
    return rows;

}

module.exports = { conectar, query };
