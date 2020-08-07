const {Sequelize, DataTypes} = require('sequelize');
const Database = require('../db');

const BlogPost = Database.seql.define('BlogPost', {
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.CHAR
    },
    date: {
        type: DataTypes.DATE
    }
}
);

var syncResult;

(async () => {
    await Database.seql.sync().then(() => {}, );
})();

module.exports = BlogPost;