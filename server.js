import express from 'express';
import cors from 'cors';
import rutasEnlaces from './routes/enlacesRoutes.js';
import dotenv from 'dotenv';
import './models/initDB.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/enlaces', rutasEnlaces);

// Inicializamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}!`);
});

