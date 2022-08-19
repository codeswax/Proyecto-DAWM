const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carrera', {
    idCarrera: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ruta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hora: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    conductor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    operador: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cliente: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'carrera',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCarrera" },
        ]
      },
      {
        name: "ruta",
        using: "BTREE",
        fields: [
          { name: "ruta" },
        ]
      },
      {
        name: "hora",
        using: "BTREE",
        fields: [
          { name: "hora" },
        ]
      },
      {
        name: "conductor",
        using: "BTREE",
        fields: [
          { name: "conductor" },
        ]
      },
      {
        name: "operador",
        using: "BTREE",
        fields: [
          { name: "operador" },
        ]
      },
      {
        name: "cliente",
        using: "BTREE",
        fields: [
          { name: "cliente" },
        ]
      },
    ]
  });
};
