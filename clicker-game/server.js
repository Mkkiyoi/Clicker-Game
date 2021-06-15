const express = require("express");
let session = require("express-session");
const routes = require("./routes");
const PORT = process.env.PORT || "3001";
const app = express();

// Middleware Definitions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Routing
app.use(routes);

app.listen(PORT, () => {
    console.log('🌎 ==> API server now on port ${PORT}!');
})