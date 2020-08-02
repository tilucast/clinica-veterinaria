const {body, check} = require('express-validator')
const moment = require('moment')

const validations = [
    body('cliente').isLength({min: 8}).withMessage('O cliente deve ser cadastrado com nome e sobrenome.'),
    body('servico').exists().isLength({min: 4}).withMessage('Cadastre o serviço prestado.'),
    body('status').exists().isLength({min: 4}).withMessage('Cadastre o status do serviço prestado.'),
    check('dataEntrega').isAfter(moment().format('MM-DD-YYYY HH:mm:ss')).withMessage('A data de entrega deve ser posterior a data de criação.')
]

module.exports = validations