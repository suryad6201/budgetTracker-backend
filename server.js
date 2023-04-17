const express = require("express");
require("./config/dbConnect");
const usersRoute = require("./routes/users/usersRoute");
const accountsRoute = require("./routes/accounts/accountsRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors = require("cors");

const app = express();

//---------------------------------------
// MIDDLEWARES
//---------------------------------------

app.use(express.json()); //parse incoming data

app.use(cors());

//---------------------------------------
// ROUTES
//---------------------------------------

//---  Users route  ---
// app.use(path, Route)
app.use("https://budget-tracker-backend.onrender.com/api/v1/users", usersRoute);

//---  Accounts route ---
app.use("https://budget-tracker-backend.onrender.com/api/v1/accounts", accountsRoute);

//---  Transaction Route  ---
app.use("https://budget-tracker-backend.onrender.com/api/v1/transactions", transactionsRoute);

//---------------------------------------
// ERROR HANDLERS
//---------------------------------------

app.use(globalErrHandler);

//---------------------------------------
// LISTEN TO SERVER
//---------------------------------------

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
