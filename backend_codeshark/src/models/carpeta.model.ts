import mongoose  from "mongoose";
import { Proyecto } from "./proyecto.model";

export interface Carpeta  {

    _id?: mongoose.Types.ObjectId,
    id?: number,
    nombre: string
    proyectos?:Array<Proyecto>;
}