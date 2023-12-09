//Funciones específicas con la lógica de negocio
import { Request, Response } from 'express';

import { Carpeta } from '../models/carpeta.model';
import { CarpetaSchema } from '../models/carpeta.schema';

export const obtenerCarpetas = (peticion: Request, respuesta: Response) => {
  CarpetaSchema.find()
		.then((result:Array<Carpeta>) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

export const obtenerCarpeta = (peticion: Request, respuesta: Response) => {
  CarpetaSchema.findOne({_id: peticion.params.id})
		.then((result:Carpeta | null) => {
			respuesta.send(result);
			respuesta.end();
		})
		.catch((error:any) => console.error(error));
}

//Funcion para el momento en que se registre un nuevo Carpeta 
export const guardarCarpeta = (req: Request, res: Response) => {
  const p = new CarpetaSchema(req.body);
  p.save().then((saveResponse:any) => {
    res.send(saveResponse);
    res.end();
  }).catch((error:any) => {
    console.log('ERRRORRR: ', error);
    res.send({message: 'Hubo un error al guardar Carpeta', error}); 
    res.end();
  });
}

//Funcion para cuando el Carpeta edite su perfil
export const actualizarCarpeta = (req: Request, res: Response) => {
  CarpetaSchema.updateOne({_id: req.params.id}, req.body
  ).then((updateResponse:any) => {
    res.send({message: 'Carpeta editado', updateResponse});
    res.end();
  }).catch((error:any) =>{
    res.send({message: 'Hubo un error al actualizar', error});
    res.end();
  });
}

//Tambien en codeShark tendra la oprtunidad de borrar su Carpeta
export const eliminarCarpeta = (req: Request, res: Response) => {
  CarpetaSchema.deleteOne({_id: req.params.id})
	.then((removeResult:any) => {
		res.send({message: 'Carpeta eliminado', removeResult});
		res.end();
	});
}