// Importación de módulos de versiones anteriores
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const usuariosRoutes = require('./routes/usuariosRoute');
const authRoutes = require('./routes/authRoute');
const productoRoute = require('./routes/productoRoute');
const cors = require('cors');

// crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

//Middlewares
app.use(express.json({ extended: true }));
app.use(express.urlencoded());
app.use(morgan('tiny'));
app.use(cors());

//importar rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoute);

// puerto y arranque del servidor
app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor Funcionando');
});
