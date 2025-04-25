import { User } from "../Models/User.model"

const usermiddleware = async (req,res,next) => {
    const email = req.body.email;
    const response = await User.findOne({email})

    if(response){
        res.status(403).json({
            msg : "The User Aready exists"
        })
    }
    else{
        next();
    }
}