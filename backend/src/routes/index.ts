import { Router } from "express";
import { usersRoutes } from "./UsersRoutes";
import { authenticateRoutes } from "./AuthenticateRoutes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", authenticateRoutes);

export { routes };
