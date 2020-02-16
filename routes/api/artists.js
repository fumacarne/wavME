var router = require('express').Router();
var db = require('../../models/db');

router.get('/', async (req, res) => {
  const artist = await db.Artist.findAll();
  res.json({ artist: artist });
});

router.post('/', async (req, res) => {
  const result = await db.Artist.create(req.body);
  res.json(result);
});

router.get('/:id', async (req, res) => {
  const user = await db.Artist.findAll({ where: { id: req.params.id } });
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const result = await db.Artist.update(req.body, { where: { id: req.params.id } });
  res.json(result);
});


module.exports = router;