const express = require('express')
const DbController = require('../controllers/DbController')
const dbController = new DbController()
const validations = require('../../config/validations')

const routes = express.Router()

routes.route('/atendimentos')
    .get((req, res) => dbController.getAttendances(res))
    .post(validations , (req, res) => dbController.createAttendance(res, req))

routes.route('/atendimentos/:id')
    .get((req, res) => dbController.getAttendance(res, Number(req.params.id)))
    .patch((req, res) => dbController.updateAttendance(res, req.body, Number(req.params.id)))
    .delete((req, res) => dbController.deleteAttendance(Number(req.params.id), res))

module.exports = routes