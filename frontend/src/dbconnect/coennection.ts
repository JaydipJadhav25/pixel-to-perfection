import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {};


async function dbConnect(): Promise<void>{

       if(connection.isConnected){

        console.log("Already connecte to database.....!");

       }
      // connection database 
      try {

        const db = await mongoose.connect("");
        console.log(db)
        connection.isConnected = db.connections[0].readyState
        console.log("DataBase Connection Successfully...........");
        
      } catch (error) {
        console.log("database connection error : "  ,error);
        //exits 
        process.exit(1)
      }

}



export default dbConnect;

