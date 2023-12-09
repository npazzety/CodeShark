//Funciones específicas con la lógica de negocio
import { Request, Response } from 'express';

import { Proyecto } from '../models/proyecto.model';
import { ProyectoSchema } from '../models/proyecto.schema';

export const obtenerProyectos = (peticion: Request, respuesta: Response) => {
  ProyectoSchema.find()
		.then((result:Array<Proyecto>) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

export const obtenerProyecto = (peticion: Request, respuesta: Response) => {
  ProyectoSchema.findOne({_id: peticion.params.id})
		.then((result:Proyecto | null) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

//Funcion para el momento en que se registre un nuevo Proyecto 
export const guardarProyecto = (req: Request, res: Response) => {
  const p = new ProyectoSchema(req.body);
  p.save().then((saveResponse:any) => {
    res.send(saveResponse);
    res.end();
  }).catch((error:any) => {
    console.log('ERRRORRR: ', error);
    res.send({message: 'Hubo un error al guardar Proyecto', error}); 
    res.end();
  });
}

//Funcion para cuando el Proyecto edite su perfil
export const actualizarProyecto = (req: Request, res: Response) => {
  ProyectoSchema.updateOne({_id: req.params.id}, req.body
  ).then((updateResponse:any) => {
    res.send({message: 'Proyecto editado', updateResponse});
    res.end();
  }).catch((error:any) =>{
    res.send({message: 'Hubo un error al actualizar', error});
    res.end();
  });
}

//Tambien en codeShark tendra la oprtunidad de borrar su Proyecto
export const eliminarProyecto = (req: Request, res: Response) => {
  ProyectoSchema.deleteOne({_id: req.params.id})
	.then((removeResult:any) => {
		res.send({message: 'Proyecto eliminado', removeResult});
		res.end();
	});
}