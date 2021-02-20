let express = require ("express")
let app = express()

let rutasProductos = require ("./routes/productos.js")
let rutasMain = require ("./routes/main.js")

let path = require ("path")

app.set ('puerto', process.env.PORT || 3000)

app.use(express.static("public"));
app.use ("/", rutasMain);

app.listen (app.get ('puerto'), () =>
console.log (`Servidor corriendo en el puerto ${app.get('puerto')}`
));





