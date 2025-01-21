import { Router } from "express";
import { ControlController } from "./control.controller";

export class ControlRoutes {
  static Routes(): Router {
    const router = Router();
    const controlController = new ControlController();
    router.post("/control", controlController.mover);
    return router;
  }
}
