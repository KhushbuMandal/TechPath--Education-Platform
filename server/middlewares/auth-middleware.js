const jwt = require ("jsonwebtoken");
const User = require ("../models/user-model");

const authMiddleware = async(req, res , next) => {
    const token = req.header("Authorization");

    //If token is not valid
    if (!token){

        //If you attempt to use an expired token , you'll receive a "401 Unauthorized HTTP" response

        return res
            .status(401)
            .json ({message: "Unauthorized HTTP , Token not provided"});

    }

    //Assuming token is in the format "Bearer <jwtToken> , Removing the "Bearer" prefix
    console.log ("Token ->" , token);
    const jwtToken = token.replace("Bearer " , "").trim();
    console.log("TOken->" , jwtToken);

    try{
        const isVerified = jwt.verify(jwtToken , process.env.JWT_SECRECT_KEY);
        console.log(isVerified);


        const userData = await User.findOne({email : isVerified.email}).select({
            password: 0,
        });
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    }catch(error){
        return res.status(401).json ({message: "Unauthorized Invalid Token"});

    } 
}

module.exports=authMiddleware;