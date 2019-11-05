var sequelize=require('sequelize'),
bycrypt=require('bcrypt');

var config=require('../config'),
db=require('../services/database');

var moddelDefinition={
    username:{
        type:sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        allowNull:false
    },
    role: {
        type: sequelize.INTEGER,
        defaultValue: config.userRoles.user
    }
};

var modelOptions = {
    instanceMethods:{
        comparePassowrds:comparePassowrds
    },
    hooks:{
        beforeValidate:hashPassword
    }
};

var UserModel=db.define('user',moddelDefinition,modelOptions);

function comparePassowrds(password,callback){
    bycrypt.compare(password,this.password,function(error,isMatch){
        if(error){
            return callback(error);
        }
        return callback(null,isMatch);
    });
}

function hashPassword(user){
    if(user.chnaged('password')){
        return bycrypt.hash(user.password,10).then((password)=>{
            user.password=password;
        })
    }

}

module.exports=UserModel;