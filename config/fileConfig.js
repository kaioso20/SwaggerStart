'use strict'

const js_yaml = require('js-yaml');
const fs = require('fs');

module.exports.getDocument = (dir) => {
    const spec = fs.readFileSync(dir, 'utf-8') //Busca a página YAML com as configs do swagger
    return js_yaml.load(spec) //Converte para JS para consumo do middleware
}