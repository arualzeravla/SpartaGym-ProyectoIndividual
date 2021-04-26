const express = require ("express");
const app = express ();
const path = require ("path");
const methodOverride = require('method-override');

// Initial config
app.set("port", process.env.PORT || 3000);
app.listen (app.get("port"), () => console.log ("Server running in http://localhost:" + app.get("port")));

// Middlewares Aplication
app.use(express.static (path.resolve (__dirname, "../public")));
app.set('views', path.resolve(__dirname, './views'));
app.use(methodOverride("_method"));


//View engine
app.set("view engine", "ejs");

// Routes
const mainRouter = require("./routes/main");
app.use("/", mainRouter);

const usersRouter = require("./routes/users");
app.use("/usuarios", usersRouter);

const productsRouter = require("./routes/products");
app.use("/productos", productsRouter);

//Use this route to test things in routes /t/1, /t/2, etc
const testsRouter = require("./routes/tests");
app.use("/t", testsRouter);