import { Router } from "express"
import eleccionRoutes from "./eleccionRoutes.js";
const router = Router()


router.use("/eleccion", eleccionRoutes)

export default router;