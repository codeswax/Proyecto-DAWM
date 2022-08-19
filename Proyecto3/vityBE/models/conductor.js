const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('conductor', {
    licencia: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'conductor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "licencia" },
        ]
      },
    ]
  });
};
