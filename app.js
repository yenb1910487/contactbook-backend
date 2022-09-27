const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");
const ContactService = require("./app/services/contact.service");
const MongoDB = require("./app/utils/mongodb.util");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});
module.exports = app;