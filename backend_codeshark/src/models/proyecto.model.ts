import mongoose  from "mongoose";

export interface Proyecto  {

    _id?: mongoose.Types.ObjectId,
    id?: number,
    nombre: string
  }