import Router from "express"
import { name } from "../controllers/name.js";

const router = Router();

router.route("/").get(name)

export default router