import dbConnect from "@/dbconnect/coennection";


export async function POST(request : Request){

    // await dbConnect(); //database call

    try {

        const{ username , email , password} = await request.json();
          console.log(username , email , password);
        
          //checking all conditions of email 
          //1. email is allredy exits with varify 
          //2. email is exits but not  verify
          //3. email is not eixts
          

          return Response.json({
            message : "get data successfully..............."
          })









        
    } catch (error : any) {

        console.log("error user signup : " ,error);

        return Response.json(
            {
            success : false ,
            massage : " user registring error...",
            },
            {
              status : 500  
                
            })
        
    }

}


