const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruta', {
    idRuta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    puntoInicio: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    puntoLlegada: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ruta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idRuta" },
        ]
      },
    ]
  });
};
