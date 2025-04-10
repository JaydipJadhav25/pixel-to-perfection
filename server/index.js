import app from "./app.js"
import { connectDB } from "./db/connection.db.js";



//strat server after connetDb

connectDB()
.then(()=>{
    app.listen(8000 , ()=>{
        console.log(`🚀server starting on port ${8000}`)
    })
})
.catch((err)=>{
     console.log(err);
})


