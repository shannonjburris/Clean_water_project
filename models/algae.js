const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Algae extends Model {}

Algae.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        site_visit_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        county: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        algae_observed: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        comments:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        lat: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        long: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        algae_type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        microcystin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        other_toxin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pic_URL: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        toxin_present: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'algae'
}
);

module.exports = Algae;

