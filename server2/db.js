const mongoose = require("mongoose");
module.exports = () => {
  // Mongo Db 연결
  function connect() {
    try {
      const { MONGO_URI = "" } = process.env;
      mongoose.connect(MONGO_URI, function (err) {
        if (err) {
          console.error("mongodb connection error", err);
        }
        console.log("mongodb connected");
      });
    } catch (error) {
      console.log("ytw error", error);
    }
  }
  connect();
  var db = mongoose.connection;
  db.on("disconnected", connect);
  db.once("open", function () {
    console.log("Connected!");
  });
};
