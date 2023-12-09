import express from 'express';
import { obtenerUsuarios, obtenerUsuario, guardarUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuarios.controller';

let router = express.Router();

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', guardarUsuario);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router; 