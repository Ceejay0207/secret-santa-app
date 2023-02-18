'use strict';
const {DataTypes , Sequelize} = require ('sequelize');
const instance = require ('../db');
const User = instance.sequelize.define('users',{
    fullname:{
        type:DataTypes.STRING,
    },
    age:{
        type:DataTypes.INTEGER
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.STRING
    },
    organizationId:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
    })

exports.model = User