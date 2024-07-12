const { z } = require ("zod")

//Creating an object Schema 

const signupSchema = z.object({
    username : z
        .string({required_error : "Name is required"})
        .trim()
        .min(3 , {message : "Name must be atleast of 3 characters"})
        .max(255 , {message : "Name must not be more than 255 characters"}),
    email : z
        .string({required_error : "Email is required"})
        .trim()
        .email({message : "Inavlid email address"})
        .min(3 , {message : "Email must be at of 3 characters"})
        .max(255 , {message : "Email must not be more than 255 characters"}),  
    phone: z
        .string({required_error : "Phone is required"})
        .trim()
        .min(10 , {message : "Phone number must  of 10 characters"})
        .max(255 , {message : "Name must not be more than 255 characters"}),      
    password: z
        .string({required_error : "Password is required"})
        .min(8 , {message : "Password must be atleast of 8 characters"})
        .max(255 , {message : "Password must not be more than 255 characters"}),
});


const loginSchema = z.object ({

    email : z
        .string({required_error : "Email is required"})
        .trim()
        .email({message : "Inavlid email address"})
        .min(3 , {message : "Email must be at of 3 characters"})
        .max(255 , {message : "Email must not be more than 255 characters"}), 

    password: z
        .string({required_error : "Password is required"})
        .min(8 , {message : "Password must be atleast of 8 characters"})
        .max(255 , {message : "Password must not be more than 255 characters"}),    
           
})


module.exports = {signupSchema , loginSchema};