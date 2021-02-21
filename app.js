const  express = require ('express');

const  app = express();

const rutasMain = require ('./routes/main');

app.use(express.static('public'));

app.set ('view engine', 'ejs');

app.use ('/', rutasMain);

app.set ('puerto', process.env.PORT || 3000);

app.listen (app.get ('puerto'), () =>
console.log (`Servidor corriendo en el puerto ${app.get('puerto')}`
));





