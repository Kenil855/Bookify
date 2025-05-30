const Login = require('../models/Login');

const addUser = async (req, res) => {
  const { name,password } = req.body;
  if (!name||!password) return res.status(400).json({ message: 'Fill the all detailes' });

  try {
    const newUser = new Login({ name ,password});

    const existname=await Login.findOne({name}) 
    if(existname)
    {return res.status(400).send("Username allready present");
    }
    await newUser.save();
    res.status(201).json(newUser);
 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addUser };
