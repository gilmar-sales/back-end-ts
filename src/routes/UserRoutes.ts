import { Router } from "express";
import UserController from "@controllers/UserController";

const UserRoutes = Router();

UserRoutes.get('/:id', UserController.get)

export default UserRoutes;