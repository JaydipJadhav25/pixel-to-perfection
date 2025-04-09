import { Router}from "express"
import { handleAiResult } from "../controllers/ai.controller.js";

const router = Router();


router.get("/get-result" , handleAiResult);


export default router;