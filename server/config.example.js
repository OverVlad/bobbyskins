/*
* Configure this module for your needs
* */
module.exports = {
  db: {
    url: "mongodb://localhost:27017/db_name"
  },
  session: {
    secret: "example"
  },
  steam: {
    apiKey: "API_KEY",
    returnURL: "URL",
    realm: "URL"
  },
  port: 3000
};
