const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

const BASE_URL = 'https://api.github.com/users/'
let results = []

app.post('/', async function(req, res, next) {
  try {
   let devs = [... req.body.developers]   
   for (let dev in devs) {
      let entry = await axios.get(`${BASE_URL}${devs[dev]}`)
      results.push({bio: entry.data.bio,
      name: entry.data.name})
   }
   return res.json(results)
   } catch(err) {
   next(err);
  }
});

app.listen(3000, () => {
   console.log('server starting on 3000')
});
