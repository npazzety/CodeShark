import mongoose  from "mongoose";
import { Carpeta } from "./carpeta.model";
import { Proyecto } from "./proyecto.model";

export type Plan = "Fishpack" | "Sharkpack" | "Megpack"

export interface Usuario  {

  _id?: mongoose.Types.ObjectId,
  id?: number,
  firstName: string,
  lastName: string,
  corroElectronico: string,
  telefonoMovil: number,
  contraseña: number,
  plan: Plan;
  carpetas?: Array<Carpeta>;
  proyectos?:Array<Proyecto>;

};
