import { Router } from "express";
import EleccionController from "../controllers/EleccionController.js";
const eleccionController = new EleccionController()

const eleccionRoutes = Router()

eleccionRoutes.post("/", eleccionController.create)
eleccionRoutes.get("/", eleccionController.getAll)

export default eleccionRoutes