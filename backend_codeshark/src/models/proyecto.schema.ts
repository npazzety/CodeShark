import mongoose  from "mongoose";
import { Proyecto } from "./proyecto.model"

const schema = new mongoose.Schema<Proyecto>({

    //_id:             Number,
     nombre:            String,
   
   });
   
   export const ProyectoSchema = mongoose.model('proyectos',schema);