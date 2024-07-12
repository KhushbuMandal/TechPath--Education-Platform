const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


// Home Logic

const home = async (req , res) => {
    try {

        res.status(200).send("Welcom to best App again");
        
    } catch (error) {
        
        console.log("error");
    }
}

//Registration Logic
const register = async (req , res) => {
    try {
        //console.log(req.body);
        //res.status(200).json({message : "Welocome to registartion page again"});

        const {username , email , phone , password} = req.body;

        const userExist = await User.findOne ({email : email});

        if (userExist) {
          //  alert("Email already existed");
            return res.status(400).json({message : "email already exists"});
        }

        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password , saltRound);


        const userCreated = await User.create({
            username ,
            email ,
            phone , 
            //password : hash_password
            password 
        });

       // res.status(200).json({message : req.body});
        res.status(201).json({
           // message : userCreated , 
            message : "Registration Sucessful !!!",
            token : await userCreated.generateToken(), 
            userId : userCreated._id.toString()
        });
    } catch (error) {
      // res.status(500).json("Internal Server Error")
       next(error);
    }
}

// Login Logic 

const login = async (req , res) => {

    try {

        const {email , password} = req.body;

        const userExist = await User.findOne({email});
        console.log (userExist);

        if (!userExist){
            return res.status(400).json({message : "Invalid Credentials"});
        }

       // const user = await bcrypt.compare(password , userExist.password);

       const user = await userExist.comparePassword(password);

        if (user) {

            res.status(200).json({
                // message : userCreated , 
                message : "Login Sucessful",
                token : await userExist.generateToken(), 
                userId : userExist._id.toString()
            });

        }else {
            res.status(401).json({message : "Inavlid email or password"});
        }
        
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }

};

// to send user data - User Logic
const user = async (req , res) => {
    try {

        const userData = req.user;
        console.log(userData);

        // return res.status(200).json({msg : userData});
        return res.status(200).json({userData});


        // res.status(200).json({msg : "Hii user"});
        
    } catch (error) {

        console.log(`Error from the user route ${error}`);
        
    }
}



module.exports = {home , register , login , user};