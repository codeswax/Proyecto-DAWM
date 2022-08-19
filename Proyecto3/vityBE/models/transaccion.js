const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaccion', {
    idTransaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    carrera: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'transaccion',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTransaccion" },
        ]
      },
      {
        name: "fkCarrera",
        using: "BTREE",
        fields: [
          { name: "carrera" },
        ]
      },
    ]
  });
};
