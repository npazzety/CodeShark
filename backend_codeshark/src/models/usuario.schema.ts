import mongoose  from "mongoose";
import { Usuario, Plan } from "./usuario.model";
import { Carpeta } from "./carpeta.model";
import { Proyecto } from "./proyecto.model";

const schema = new mongoose.Schema<Usuario>({

 //_id:             Number,
  firstName:            String,
  lastName:           String,
  corroElectronico:            String,
  telefonoMovil:         Number,
  contraseña:         String,
  plan: {
    type: String,
    required: true
  },
  carpetas:           Array<Carpeta>,
  proyectos:          Array<Proyecto>,
  

});

export const UsuarioSchema = mongoose.model('usuarios',schema);// enlace