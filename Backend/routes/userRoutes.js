const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/userController');
const { addReservation } = require('../controllers/reservaion');

router.post('/add', (req, res, next) => {
    console.log('Received POST /add');
    addUser(req, res, next);
  });
  router.post('/res', (req, res, next) => {
    console.log('Received POST /res');
    addReservation(req, res, next);
  });
  router.post('/res', (req, res, next) => {
    console.log('Received POST /res');
    addReservation(req, res, next);
  });

module.exports = router;
