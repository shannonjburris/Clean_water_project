const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Post extends Model {
  
}

Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      body: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        references: {
            model: "user",
            key: id,
        },
    }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
}
);

    module.exports = Post;