import { Router } from "express";
import express from "express";
import cors from "cors";

export class Server {
  public app = express();
  private port: number;
  private routes: Router;

  constructor(port: number, routes: Router) {
    this.port = port;
    this.routes = routes;
  }

  public Start() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(this.routes);
    this.app.use(express.static("public"));
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}
