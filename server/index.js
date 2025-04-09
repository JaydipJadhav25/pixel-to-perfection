import app from "./app.js"
import { connectDB } from "./db/connection.db.js";



//strat server after connetDb

connectDB()
.then(()=>{
    app.listen(3000 , ()=>{
        console.log(`🚀server starting on port ${3000}`)
    })
})
.catch((err)=>{
     console.log(err);
})


