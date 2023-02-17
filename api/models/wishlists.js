const {sequelize} = require('../db')
const {DataTypes} = require('sequelize')
const Wishlists = sequelize.define('wishlists',{
    wishlists:{
        type:DataTypes.STRING,
    },
    user_id:{
        type:DataTypes.INTEGER
    },
    organization_id:{
      type:DataTypes.INTEGER,
      references:{
           model: "organizations",
           key: 'id'
          }
    },
    product_name:{
        type:DataTypes.STRING
    },
    product_price:{
        type:DataTypes.INTEGER
    },
    product_link:{
        type:DataTypes.STRING
    },
    product_image:{
      type:DataTypes.STRING
    }
    })

module.exports = Wishlists