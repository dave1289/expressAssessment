const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    let results = results.map(async d => {
      await axios.get(`https://api.github.com/users/${d}`)
    });
    Promise.all(results)
    .then(() => {
      let out = sortedResults.map( r => ({
          name: r.data.name, bio: r.data.bio }));
      return res.send(JSON.stringify(out));
    })

  } catch(err) {
    next(err);
  }
});

app.listen(3000, () => {
   console.log('server starting on 3000')
});
