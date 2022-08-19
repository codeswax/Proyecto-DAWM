const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleado', {
    cedula: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    recomendado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'empleado',
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
