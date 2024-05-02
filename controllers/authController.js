import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";


export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    //validations
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req,res) => {
  try{
    const {email,password} = req.body
    //validation
    if(!email || !password){
      return res.status(404).send({
        success:false,
        message:'Invalid email or password'
      })
    }
  //check user
  const user = await userModel.findOne({email})
  if(!user){
    return res.status(404).send({
      success:false,
      message:'Email is not registerd'
    })
  }

  if(password!=user.password){
    return res.status(404).send({
      success:false,
      message:"invalid Password"
    })
  }

  //token
  const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(200).send({
    success:true,
    message:'login succesfully',
    user:{
      name:user.name,
      email:user.email,
      phone: user.phone,
      address: user.address,
    },
    token,
  });
  }catch(error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:'Error in login',
      error
    })
  }
};

//test controller
export const testController = (req,res) => {
  try{
    res.send('Protected Routes');
  }
  catch(error){
    res.send({error});
  }
};
