import controller from "../controllers/controller.js";
import { Router } from "express";

const router = Router();

router.get('/weights', controller.getWeights);
router.post('/weights', controller.addWeight);


export default router;