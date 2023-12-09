import express from 'express';
import { obtenerCarpetas, obtenerCarpeta, guardarCarpeta, actualizarCarpeta, eliminarCarpeta } from '../controllers/carpetas.controller';

let router = express.Router();

router.get('/', obtenerCarpetas);
router.get('/:id', obtenerCarpeta);
router.post('/', guardarCarpeta);
router.put('/:id', actualizarCarpeta);
router.delete('/:id', eliminarCarpeta);

export default router; 