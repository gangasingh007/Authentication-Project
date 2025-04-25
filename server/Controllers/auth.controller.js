import { userInputverification } from "../Types/types";

export const signin = async (req,res) => {
    const paylod = req.body;
    const parsedpoaylod = userInputverification.safeParse(paylod);

    if (!parsedpoaylod.success){
        res.status(401).json({
            msg : "Please send the right inputs"
        })
        return;
    }

    
}
export const signup = async (req,res) => {
    res.send("Sign up route")
}
export const logout = async (req,res) => {
    res.send("Login In route")
}