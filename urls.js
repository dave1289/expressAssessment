const fs = require('fs')
const process = require('process')
const axios = require('axios')

function pullUrl(path) {
   fs.readFile(path, 'utf8', (err, data) => {
      let urls = [...data.split('\n')]
      let i = 0
      for (let url of urls) {
         pullData(url)
         processName(url)
      }
   })  
}

function processName(url) {
   let domain = (new URL(url))
   domain = domain.hostname
   return domain
}

async function pullData(url) {
   try {
      let res = await axios.get(url);
      let data = await res.data
      fs.writeFile(`${processName(url)}.txt`, data, 'utf8', ()=>{
      })
   }
   catch(e) {
      console.error(e)
   }
}

pullUrl(process.argv[2])