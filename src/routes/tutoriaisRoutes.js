import express from "express";
import {
  
  getAllTutoriais,

} from "./../controllers/tutorialController.js";

const router = express.Router();

router.get("/", getAllTutoriais);


export default router;