import { genrateResult } from "../services/ai.service.js";
import dotenv from "dotenv"
dotenv.config();




const handleAiResult = async (req, res) => {
    const { prompt } = req.query;

    try {
        const result = await genrateResult(prompt);
        // return res.status(201).json(result);
        return res.status(201).send(result);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}




export {
    handleAiResult
}