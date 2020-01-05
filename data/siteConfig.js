// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })


let config = {}
if (process.env.GATSBY_ACTIVE_ENV == "web") {
  config = require('./siteConfig-web')
} else {
  config = require('./siteConfig-github')
}


module.exports = config;
