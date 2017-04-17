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
    apiKey: "C2ADE58D74EE6BBA7FB8B62C69EAC121",
    returnURL: "http://localhost:3000/auth/steam/return",
    realm: "http://localhost:3000/"
  },
  port: 3000
};
