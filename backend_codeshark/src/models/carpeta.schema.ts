import mongoose  from "mongoose";
import { Carpeta } from "./carpeta.model"

const schema = new mongoose.Schema<Carpeta>({

    //_id:             Number,
     nombre:            String,
   
   });
   
   export const CarpetaSchema = mongoose.model('carpetas',schema);
