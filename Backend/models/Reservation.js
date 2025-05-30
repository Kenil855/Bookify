const mongoose=require("mongoose");

const ReservationSchema=new mongoose.Schema(
    {
  name:{
      required:true,
      type:String
  },
  email:{
      required:true,
      type:String
  },
  date:{
      required:true,
      type:String
  },
  time:{
      required:true,
      type:String
  },
  
  phone:{
      required:true,
      type:String
  }  
})

module.exports=mongoose.model("Reservation",ReservationSchema);