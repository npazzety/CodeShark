//Funciones específicas con la lógica de negocio
import { Request, Response } from 'express';

import { Usuario } from '../models/usuario.model';
import { UsuarioSchema } from '../models/usuario.schema';

export const obtenerUsuarios = (peticion: Request, respuesta: Response) => {
  UsuarioSchema.find()
		.then((result:Array<Usuario>) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

export const obtenerUsuario = (peticion: Request, respuesta: Response) => {
  UsuarioSchema.findOne({_id: peticion.params.id})
		.then((result:Usuario | null) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

//Funcion para el momento en que se registre un nuevo usuario 
export const guardarUsuario = (req: Request, res: Response) => {
  const p = new UsuarioSchema(req.body);
  p.save().then((saveResponse:any) => {
    res.send(saveResponse);
    res.end();
  }).catch((error:any) => {
    console.log('ERRRORRR: ', error);
    res.send({message: 'Hubo un error al guardar usuario', error}); 
    res.end();
  });
}

//Funcion para cuando el usuario edite su perfil
export const actualizarUsuario = (req: Request, res: Response) => {
  UsuarioSchema.updateOne({_id: req.params.id}, req.body
  ).then((updateResponse:any) => {
    res.send({message: 'Usuario editado', updateResponse});
    res.end();
  }).catch((error:any) =>{
    res.send({message: 'Hubo un error al actualizar', error});
    res.end();
  });
}

//Tambien en codeShark tendra la oprtunidad de borrar su usuario
export const eliminarUsuario = (req: Request, res: Response) => {
  UsuarioSchema.deleteOne({_id: req.params.id})
	.then((removeResult:any) => {
		res.send({message: 'Uusuario eliminado', removeResult});
		res.end();
	});
}