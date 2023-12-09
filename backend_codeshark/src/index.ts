import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routerUsuarios from './routers/usuario.router';
import routerProyectos from './routers/proyecto.router';
import routerCarpetas from './routers/carpeta.router';
import { Database } from './utils/database';

dotenv.config();
const db:Database = new Database(); 
const app: Express = express();
const port = process.env.PORT;

app.use(express.json()); 
app.use('/usuarios', routerUsuarios);
app.use('/proyectos', routerProyectos);
app.use('/carpetas', routerCarpetas);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript ');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});