import mongoose , {Schema , Document}from "mongoose";

export interface messagesInterface extends Document{
    content : string;
    createdAt : Date;
}

export interface servicesInterface extends Document{
    servicesName : string;
    serviceTime : Date
}

export interface currentServiceInterface extends Document{
    currentServiceName : string;
    currentServicepaymentIsDone : boolean
    currentServicesPayment : number
}

export interface UserInterface extends Document{
        username : string;
        email : string;
        password : string;
        type : string;
        verifyed : boolean;
        verifyCode : string;
        verifyCodeExpriy : Date;
        messages : messagesInterface[];
        currentService : currentServiceInterface[]
        totalServices : servicesInterface[]
}


const messagesSchema : Schema<messagesInterface> = new Schema({
     content :{
        type: String,
        required :true
     },
     createdAt :{
        type: Date,
        default : Date.now(),
        required :true
     },

})



const servicesSchema : Schema<servicesInterface> = new Schema({
    servicesName :
   {
       type: String,
       required :true
    },
    serviceTime:{
       type: Date,
       default : Date.now(),
       required :true
    },

})


const currentServiceSchema : Schema<currentServiceInterface> = new Schema({
    currentServiceName :{
        type : String,
        required : true
    },
    currentServicepaymentIsDone : {
        type : Boolean,
        required : true
    },
    currentServicesPayment : {
        type : Number,
        defult : 0,
        required : true

    }
})



const userSchema : Schema<UserInterface> = new Schema({
    username :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    type :{
        type : String,
        default :"USER"
    },
    verifyed : {
        type :Boolean,
        defult : false,
        required : true
    },
    verifyCode :{
        type : String,
        required : true
    },
    verifyCodeExpriy :{
        type : Date,
        required : true
    },
    messages : [messagesSchema],
    currentService : [currentServiceSchema],
    totalServices : [servicesSchema]

})

const UserModel = (mongoose.models.User as mongoose.Model<UserInterface>) || mongoose.model("User" , userSchema);
