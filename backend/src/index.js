const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

// Comandos utilizados para conectar ao mongodb atlas
mongoose.connect('mongodb+srv://admin:admin@clustertest-8mhpl.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Comandos utilizados para conectar a um mongodb local
// mongoose.connect('mongodb://localhost:27017/myapp',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

app.use(express.json());
app.use(routes);

app.listen(3333);