const {sequelize} = require('../api/db')
const {DataTypes} = require('sequelize')
const Users = sequelize.define('users',{
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
        references:{
             model:{
                tableName:'organizations',
                schema:'schema'
             },
             key: 'id'
            },
            allowNull:false,
            onUpdate:'cascade',
            onDelete:'cascade'
    },
    })

module.exports = Users