'use strict'

module.exports.responseUtil = (res, message, statusCode) => res.status(statusCode).send({message}) 