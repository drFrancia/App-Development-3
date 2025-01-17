import express from 'express';
import { obtenerEnlaces, crearEnlace } from '../controllers/enlacesController.js';

const router = express.Router();

// Ruta para obtener todos los enlaces
router.get('/', obtenerEnlaces);


// Ruta para crear un enlace nuevo
router.post('/', crearEnlace);

export default router;


