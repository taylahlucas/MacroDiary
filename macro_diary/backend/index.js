const express = require('express');
const mongoose = require('mongoose');
const app = express();

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/macro_diary')
      .then((response) => {
        console.log("Mongodb connected......" , response);
        app.listen(4000, () => {
          console.log("Server is running on port 4000");
        })
      })
    .error((error) => {
      console.error('Error connecting to the database', error);
    })
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
}

connectToDatabase();