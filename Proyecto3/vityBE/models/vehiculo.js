const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehiculo', {
    placa: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    conductor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vehiculo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "placa" },
        ]
      },
      {
        name: "conductor",
        using: "BTREE",
        fields: [
          { name: "conductor" },
        ]
      },
    ]
  });
};
