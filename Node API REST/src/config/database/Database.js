class Database {
    constructor(connection){
        this.connection = connection
    }

    createTables(){
        const table_attendance = `CREATE TABLE IF NOT EXISTS ATENDIMENTOS (
            id INT NOT NULL AUTO_INCREMENT,
            cliente VARCHAR(50) NOT NULL,
            pet VARCHAR(30),
            servico VARCHAR(30) NOT NULL,
            status VARCHAR(20) NOT NULL,
            observacoes TEXT,
            dataEntrega datetime NOT NULL,
            dataCriacao datetime NOT NULL,
            PRIMARY KEY(id)
        )`

        this.connection.query(table_attendance, (err) =>{
            if(err)
                return console.log(err)
        })
    }
}

module.exports = Database