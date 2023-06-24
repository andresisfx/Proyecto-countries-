const {DataTypes, UUIDV4} = require("sequelize");

module.exports = (sequelize)=>{
    sequelize.define("Activity",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
        },
       name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dificult:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                min:1,
                max:5
            },
        },
        duration:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                isInt:true,
                min:1,
                max:24
            }
        },
        season:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isIn:[['Summer', 'Autumn', 'Winter', 'Spring']]
            }
        }
    },
    {
      timestamps:false
    }
    );
}