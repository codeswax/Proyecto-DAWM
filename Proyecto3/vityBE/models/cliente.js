const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    numTarjetaCredito: {
      type: DataTypes.STRING(16),
      allowNull: true,
      unique: "numTarjetaCredito"
    }
  }, {
    sequelize,
    tableName: 'cliente',
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
      {
        name: "numTarjetaCredito",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numTarjetaCredito" },
        ]
      },
    ]
  });
};
