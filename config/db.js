import Sequelize from 'sequelize';

const db = new Sequelize('bj9xhxwndehyq7iehber', 'uexgucacehk2wmma', '8TA6YerT7P4vneMzKohg', {
  host: 'bj9xhxwndehyq7iehber-mysql.services.clever-cloud.com',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

export default db;
