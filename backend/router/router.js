import weightController from "../controllers/weightEntryController.js";
import { Router } from "express";
import goalController from "../controllers/weightGoalController.js";

const router = Router();

router.post('/goals', goalController.addGoal);
router.get('/goal', goalController.getGoals);
router.get('/weights', weightController.getWeights);
router.post('/weights', weightController.addWeight);
router.delete('/weights/:id', weightController.deleteWeights);


export default router;