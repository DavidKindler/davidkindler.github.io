// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

console.log('NODE_ENV ==>', process.env.NODE_ENV)
console.log('SITE_ENV ==>', process.env.GATSBY_ACTIVE_ENV)

let config = {}
if (process.env.GATSBY_ACTIVE_ENV == "web") {
  config = require('./siteConfig-web')
} else {
  config = require('./siteConfig-github')
}

console.log('siteUrl ==>', config.siteUrl)
module.exports = config;
