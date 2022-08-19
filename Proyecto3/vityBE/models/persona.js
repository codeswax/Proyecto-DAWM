const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona', {
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    telefono: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "-"
    }
  }, {
    sequelize,
    tableName: 'persona',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cedula" },
        ]
      },
    ]
  });
  
};
