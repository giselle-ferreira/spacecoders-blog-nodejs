const { Sequelize } = require('sequelize')
require('dotenv').config(); 
const sequelize = new Sequelize('blognode', 'root', process.env.MYSQL_PASSWORD , {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Banco de Dados conectado via ORM')

} catch(err) {
    console.log(`Ocorreu um erro: ${err}`)
}

module.exports = sequelize;