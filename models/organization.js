'use strict';
const {sequelize} = require('../db')
const {DataTypes} = require('sequelize')
const Organizations = sequelize.define('organizations',{
    name:{
        type:DataTypes.STRING,
    }
    },
     {
    tableName:'organizations'
     }
    )

module.exports = Organizations