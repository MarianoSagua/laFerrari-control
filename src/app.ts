import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/app.routes";
import { Server } from "./server";

(() => {
  main();
})();

function main() {
  const server = new Server(envs.PORT, AppRoutes.Routes());
  server.Start();
}
