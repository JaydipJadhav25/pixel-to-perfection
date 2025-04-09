import dotenv from "dotenv"
dotenv.config();
import {GoogleGenerativeAI} from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({
     model: "gemini-1.5-flash" 
});

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());


export const genrateResult = async(prompt) =>{

const result = await model.generateContent(prompt);

return result.response.text()

}