import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const fetchWrap = async (url, type) => {
  const response = await fetch(url);
  return (await response[type]());
}

const users = async () => Array.from({length: 10}, (j, k) => ({ id: k.toString(10), bucketId: k.toString(10), name: `Name${k}`, hash: Math.random() }));

router
  .get('/', async (req, res) => {
    res.send(await users());
  })
  .get('/buckets', async (req, res) => {
    const buckets = await fetchWrap('http://localhost:4003/buckets', 'json');
    const usersBuckets = (await users()).map((user) => ({
      ...user,
      bucket: buckets.find((bucket) => bucket.id === user.bucketId)
    }));
  
    res.send(usersBuckets);
  
  })
  .get('/:id', async (req, res) => {
    const {id} = req.params;
    
    const user = (await users()).find((user) => id === user.id);
    if (!user) {
      res.status(404).end();
    }
    
    res.send(user);
  })


export default router;
