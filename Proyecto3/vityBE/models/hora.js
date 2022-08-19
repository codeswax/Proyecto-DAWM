const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hora', {
    idHora: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    horaLlegada: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'hora',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHora" },
        ]
      },
    ]
  });
};
