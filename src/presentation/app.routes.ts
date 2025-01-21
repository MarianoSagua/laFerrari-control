import { Router } from "express";
import { ControlRoutes } from "./control/control.routes";

export class AppRoutes {
  static Routes(): Router {
    const router = Router();
    router.use("/api/control", ControlRoutes.Routes());
    return router;
  }
}
