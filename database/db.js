const mongoose = require("mongoose");
//const url='mongodb+srv://divyansh:divyansh@cluster0.synmv6m.mongodb.net/BookApi?retryWrites=true&w=majority';
const url =
  "mongodb+srv://rakshitaa:Ra@041202@cluster0.x79by3d.mongodb.net/BookApi";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbcon = mongoose.connection;
dbcon.on("error", console.error.bind(console, "Connection Error"));
dbcon.on("open", () => {
  console.log("DB CONNECTED");
});
module.exports = dbcon;
