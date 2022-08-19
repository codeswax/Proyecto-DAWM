var DataTypes = require("sequelize").DataTypes;
const carrera = require("./carrera");
var _carrera = require("./carrera");
var _cliente = require("./cliente");
var _conductor = require("./conductor");
var _empleado = require("./empleado");
var _hora = require("./hora");
var _operador = require("./operador");
var _persona = require("./persona");
var _ruta = require("./ruta");
var _transaccion = require("./transaccion");
var _vehiculo = require("./vehiculo");

function initModels(sequelize) {
  var carrera = _carrera(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var conductor = _conductor(sequelize, DataTypes);
  var empleado = _empleado(sequelize, DataTypes);
  var hora = _hora(sequelize, DataTypes);
  var operador = _operador(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var ruta = _ruta(sequelize, DataTypes);
  var transaccion = _transaccion(sequelize, DataTypes);
  var vehiculo = _vehiculo(sequelize, DataTypes);

  cliente.belongsTo(persona, { as: "fkCliente", foreignKey: "cedula" });
  persona.hasOne(cliente, { as: "fkCliente", foreignKey: "cedula" });

  conductor.belongsTo(persona, { as: "datosConductor", foreignKey: "licencia" });
  persona.hasOne(conductor, { as: "datosConductor", foreignKey: "licencia" });

  operador.belongsTo(persona, { as: "datosOperador", foreignKey: "idOperador" });
  persona.hasOne(operador, { as: "datosOperador", foreignKey: "idOperador" });

  carrera.belongsTo(cliente, { as: "fkCarreraxCliente", foreignKey: "cliente" });
  cliente.hasMany(carrera, { as: "carrerasCliente", foreignKey: "cliente" })


  //datos de carrera
  carrera.belongsTo(transaccion, {as: "carrTrans", foreignKey: "idCarrera"})
  transaccion.belongsTo(carrera, {as: "carrTrans", foreignKey: "carrera"})

  carrera.belongsTo(conductor, { as: "conductorCarrera", foreignKey: "conductor" });
  conductor.hasMany(carrera, { as: "conductorCarrera", foreignKey: "conductor" });

  carrera.belongsTo(operador, { as: "operadorCarrera", foreignKey: "operador" });
  operador.hasMany(carrera, { as: "operadorCarrera", foreignKey: "operador" });

  carrera.belongsTo(hora, { as: "horaCarrera", foreignKey: "hora" });
  hora.hasOne(carrera, { as: "horaCarrera", foreignKey: "hora" });

  carrera.belongsTo(ruta, { as: "rutaCarrera", foreignKey: "ruta" });
  ruta.hasOne(carrera, { as: "rutaCarrera", foreignKey: "ruta" });

  return {
    carrera,
    cliente,
    conductor,
    empleado,
    hora,
    operador,
    persona,
    ruta,
    transaccion,
    vehiculo,
  };

}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
