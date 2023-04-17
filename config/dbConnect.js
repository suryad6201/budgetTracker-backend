const mongoose = require("mongoose");

//CONNECT
const dbConnect = async () => {
  try {
    const URI =
      "mongodb+srv://suryad6201:thisismongodbpassword@cluster0.go0zhfd.mongodb.net/budget-tracker?retryWrites=true&w=majority";
    await mongoose.connect(URI);
    console.log("DB Connected Successfully...");
  } catch (error) {
    console.log(error.message);
    //exit the server
    process.exit(1);
  }
};

dbConnect();
