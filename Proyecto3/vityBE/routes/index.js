var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
const { Op } = require('sequelize');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index')
});

router.get('/trips', async function (req, res, next) {
  const listOfTrips = await models.carrera.findAll({
  });
  res.json(listOfTrips);
})

router.get('/tripsdetails/trip/:trip', async function (req, res, next) {
  let trip = parseInt(req.params.trip)
  const listOfTrips = await models.transaccion.findAll({
    include: [
      {
        model: models.carrera, as: "carrTrans",
        include: [
          {
            model: models.ruta, as: "rutaCarrera",
          }, {
            model: models.hora, as: "horaCarrera",
          }, {
            model: models.operador, as: "operadorCarrera",
            include: {
              model: models.persona, as: "datosOperador",
            }
          }, {
            model: models.conductor, as: "conductorCarrera",
            include: {
              model: models.persona, as: "datosConductor",
            },
          }
        ],
      },
    ],
    where: {
      [Op.and]: [
        { idTransaccion: trip }
      ]
    },
  });
  res.json(listOfTrips);
})

router.get('/profile', async function (req, res, next) {
  const profileStuff = await models.cliente.findAll({
    include: [
      {
        model: models.persona, as: "fkCliente",
      },
    ],
  });
  res.json(profileStuff);
})

module.exports = router;
