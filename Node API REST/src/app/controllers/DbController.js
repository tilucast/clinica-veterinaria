const Database = require('../../config/database/Database')
const AttDao = require('../../config/infra/AttDao')
const {validationResult} = require('express-validator')
const moment = require('moment')
class DbController{
    constructor(){
        this.connection = require('../../config/database/connection')
        this.Database = new Database(this.connection)
        this.attDao = new AttDao(this.connection)

        this.init()
    }

    init(){
        this.connection.connect((err) =>{
            if(err)
                return console.log(err)

            this.Database.createTables()
            console.log('Connected.')
        })
    }

    getAttendance(res, req){
        this.attDao.listSingleAttendance(res, req)
    }

    getAttendances(res){
        this.attDao.listAttendances(res)
    }

    createAttendance(res, req){
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        this.attDao.addAttendance(res, req.body)
    }

    updateAttendance(res, req, id){
        this.attDao.updateAttendance(res, req, id)
    }

    deleteAttendance(req, res){
        this.attDao.deleteAttendance(req, res)
    }
}

module.exports = DbController