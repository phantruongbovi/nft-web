// const express = require("express");
// const mongoose = require("mongoose");

// const authRouter = require("./routes/auth");
// const helloRouter = require("./routes/hello");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.czrhoe2.mongodb.net/nft?retryWrites=true&w=majority`
//     );

//     console.log("DB connected");
//   } catch (error) {
//     console.log(error);
//     console.log("loi roii!!!");
//     process.exit(1);
//   }
// };

// // connectDB();

// const app = express();

// app.use(express.json());
// app.use("/home", helloRouter);
// //app.use("/api/auth", authRouter);

// const PORT = 4000

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `)
// })

// app.get('/', (req, res) => {
//   res.send('Hey this is my API running 🥳')
// })

// app.get('/about', (req, res) => {
//   res.send('This is my about route..... ')
// })

// // Export the Express API
// module.exports = app

// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app