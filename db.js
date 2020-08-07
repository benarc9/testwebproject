const {Sequelize} = require('sequelize');

class Database{

    constructor(){
    }

    async authenticate (){
        var result = await Database.seql.authenticate();
        try {
            console.log('Connection to database successfully established!');
        } catch (error) {
            console.error('Unable to connect to the database!');
        }
    }

    createDB(){
        var connect = new Sequelize();
    }
}

Database.seql = new Sequelize('website', 'ben', '2', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Database;