const moment = require('moment')

class AttDao{
    constructor(connection){
        this.connection = connection
    }

    listSingleAttendance(res, id){
        const listAttendance = 'SELECT * FROM ATENDIMENTOS WHERE id = ?'

        this.connection.query(listAttendance, id, (err, result) =>{
            if(err){
                console.log(err)
                return res.status(400).json(err)
            }
            return res.status(200).json(result)
        })
    }

    listAttendances(res){
        const getAttendances = 'SELECT * FROM ATENDIMENTOS'

        this.connection.query(getAttendances, (err, result) =>{
            if(err){
                console.log(err)
                return res.status(400).json(err)
            }

            return res.status(200).json(result)
        })
    }

    addAttendance(res, attendance){
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const dataEntrega = moment(attendance.dataEntrega, 'MM-DD-YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss')
        const datedAttendance = {...attendance, dataEntrega ,dataCriacao}

        const validate = moment(dataEntrega).isAfter(dataCriacao)

        const addAttendance = 'INSERT INTO ATENDIMENTOS SET ?'
 
        this.connection.query(addAttendance, datedAttendance, (err, {insertId}) =>{
            if(err){
                res.status(400).json('An error has occurred.')
                return console.log(err)
            }

            console.log(`Attendance added successfully.`)
            return res.status(200).json(`Attendace ${insertId} added successfully.`)
        })
    }

    updateAttendance(res, params, id){
        const updateAttendance = 'UPDATE ATENDIMENTOS SET ? WHERE id = ?'

        this.connection.query(updateAttendance, [params, id], (err, result) =>{
            if(err){
                console.log(err)
                return res.status(400).json(err)
            }

            return res.status(200).json(params)
        })
    }

    deleteAttendance(id, res){
        const deleteAttendance = 'DELETE FROM ATENDIMENTOS WHERE id = ?'

        this.connection.query(deleteAttendance, id, (err, result) =>{
            if(err){
                console.log(err)
                return res.status(400).json(err)
            }
            
            result.affectedRows != 0 ? res.status(200).json(`Attendance ${id} was successfully removed.`) : res.status(404).json('Attendance not found.')
        })
    }
}

module.exports = AttDao