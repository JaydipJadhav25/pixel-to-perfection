import dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.routes.js";
import aiRoutes from "./routes/ai.routes.js";


export const app = express();

//middleware
// app.use(cors(
//     {
//         origin : "*",
//         credentials : true
//     }
// ));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get("/" , (req , res)=>{
    return res.send("<h1>Hello world</h1>")
})



//routes
app.use("/user" , userRoutes);
app.use("/ai" , aiRoutes);











//custom error handling 
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({ message: message });
});
  



export default app;






