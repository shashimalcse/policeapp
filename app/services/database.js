var config=require('./../config'),
    sequelize=require('sequelize');

module.exports=new sequelize(
    config.db.name,
    config.db.user,
    config.db.password,
    config.db.details
);    