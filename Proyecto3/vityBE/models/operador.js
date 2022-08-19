const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operador', {
    idOperador: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'operador',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOperador" },
        ]
      },
    ]
  });
};
