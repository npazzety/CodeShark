import express from 'express';
import { obtenerProyectos, obtenerProyecto, guardarProyecto, actualizarProyecto, eliminarProyecto } from '../controllers/proyectos.controller';

let router = express.Router();

router.get('/', obtenerProyectos);
router.get('/:id', obtenerProyecto);
router.post('/', guardarProyecto);
router.put('/:id', actualizarProyecto);
router.delete('/:id', eliminarProyecto);

export default router; 