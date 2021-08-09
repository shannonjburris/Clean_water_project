const { Model, DataTypes } = require('sequelize');
const sequelize            = require('../config/connection'); 
const bcrypt               = require('bcrypt');


class User extends Model {
    checkPassword(pw) {
        return bcrypt.compareSync(pw, this.password)
    }
}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    //   add letters only?
      username: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isEmail: true
        }
      },
    //   add pasword length 
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6],
          },
      },
    }, {
      hooks: {
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
          async beforeUpdate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
}
);

    module.exports = User;