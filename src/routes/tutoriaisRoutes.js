import express from "express";
import {
  
  getAllTutoriais,
  getTutorialById,
  createTutorial,
  deleteTutorial,


} from "./../controllers/tutorialController.js";

const router = express.Router();

router.get("/", getAllTutoriais);
router.get("/:id", getTutorialById);
router.post("/", createTutorial);
router.delete("/:id", deleteTutorial);


export default router;