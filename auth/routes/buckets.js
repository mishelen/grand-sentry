const express = require('express');
const router = express.Router();

const delay = (ms) => new Promise(res => setTimeout(res, ms));

router
  .get('/', async (req, res) => {
    if (Math.random() < 0.1) {
      await delay(2500 + Math.random() * 1000);
      return res.status(503).end();
    }
    res.send(Array.from({length: 10}, (j, k) => ({id: k.toString(), name: `Bucket ${k}`, hash: Math.random()})));
  })
  .get('/:id', async (req, res) => {
    if (Math.random() < 0.1) {
      await delay(2500 + Math.random() * 1000);
      return res.status(503).end();
    }
    
    const {id} = req.params;
    res.send({
      id,
      name: `Name${id}`,
      hash: Math.random()
    });
  })
  .get('/:id/users', async (req, res) => {
    res.status(501);
    res.send({error: 'Not Implemented'});
  });

module.exports = router;
