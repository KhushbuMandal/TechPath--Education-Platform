const validate = (schema) => async (req , res , next) => {

    try {
        //basically check kre reh hai ki barabar hai
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
        
    } catch (err) {
        // console.log (err)
         const status = 422;
         const message = "Fill the input properly";
         const extraDetails = err.errors[0].message;
       //console.log(message);

       const error = {
        status,
        message,
        extraDetails
       };

        console.log (error);

        // res.status(400).json({msg : "Validation failed"})
        // res.status(400).json({msg : message})
        next (error);
    }
};

module.exports = validate;