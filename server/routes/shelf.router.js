const { runSaga } = require('@redux-saga/core');
const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  pool
    .query(`SELECT * FROM "item" WHERE user_id=$1;`, [req.user.id])
    .then((results) => {
      res.send(results.rows);
    }).catch(err => {
      res.sendStatus(500);
      console.log('Error in GET /shelf', err);

    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = 'DELETE FROM item WHERE id=$1 AND user_id=$2;';
  pool.query(queryText, [req.params.id, req.user.id])
    .then(() => { res.sendStatus(200) })
    .catch((error) => {
      console.log('Error in deleting item', error);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
