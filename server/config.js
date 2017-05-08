/*
* Configure this module for your needs
* */
module.exports = {
  db: {
    url: "mongodb://localhost:27017/bobby-skins"
  },
  session: {
    secret: "bobby"
  },
  steam: {
    apiKey: "6906C825D8394AAC1E498BCA7D7A79DC",
    returnURL: "http://localhost:3000/auth/steam/return",
    realm: "http://localhost:3000/"
  },
  port: 3000
};
