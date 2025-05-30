const Reservation=require("../models/Reservation");

const addReservation=async(req,res)=>{

    const {time,name,date,phone,email}=req.body;
    if(!name||!email||!phone||!date||!time){
        return res.status(404).send("Please Fill the form")
    }

    try {
        const newReservation = new Reservation({ name ,email,phone,date,time}); 
        await newReservation.save();
        res.status(201).json(newReservation);
     
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    };
    
    module.exports = { addReservation};
    


