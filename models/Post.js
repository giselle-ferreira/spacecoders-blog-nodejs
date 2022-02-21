const { DataTypes } = require('sequelize')
const database = require('../database/conn')

const Post = database.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false
    },

    date: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Post