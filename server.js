const https = require('https')
const fs = require('fs')
const Nuxt = require('nuxt')
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000

// Nuxt.js setup
let config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)
nuxt.build()

// HTTPS Server
const options = {
  key: fs.readFileSync('/home/darkside/certs/server.key'),
  cert: fs.readFileSync('/home/darkside/certs/server.crt')
}

// Create the server
https
.createServer(options, nuxt.render)
.listen(port)

console.log(`Server listening on https://localhost:${port}`)
