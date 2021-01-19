import { Sequelize } from 'sequelize'
console.info(new Sequelize('localhost', 'user', 'password', {
  dialect: 'mysql'
}))
