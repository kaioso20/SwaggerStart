'use strict'

const { responseUtil } = require("../utils/reponseUtil")

module.exports.getTeste = (req, res) => responseUtil(res, 'Validado com sucesso', 200)