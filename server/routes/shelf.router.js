const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// GET OUTTA THE BACKEND TERRY
/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
  const query = `SELECT * FROM "item"`
  pool.query(query)
  .then(result => {
res.send(result.rows)
  })
  .catch(err => {
    console.error('ERROR in shelf.router GET -> ', err)
    res.sendStatus(500)
  })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  const query = `INSERT INTO "item" ("description", "image_url", "user_id")
                  VALUES ($1, $2, $3)`
      pool.query(query, [req.body.description, req.body.image_url, req.body.user_id])
.then(result => {
console.log('item posted')
})
.catch(err => 
console.error('ERROR in shelf router POST ->', err)
)
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
const deleteID = req.params.id

const query = `DELETE FROM "item" WHERE "id" = $1;`
pool.query(query, [deleteID])
  .then(result => {
    res.sendStatus(204)
    .catch(err => {
      console.log("ERROR IN shelf router DELETE")
      res.sendStatus(500)
    })
  })
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
