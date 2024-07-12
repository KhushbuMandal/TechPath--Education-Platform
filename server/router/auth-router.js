// In Express.js, a router is a component that allows you to manage different routes of your web application. It is used to define endpoints (URIs) and how they should respond to client requests. Routers help to organize your application by grouping related route handlers together, which makes the codebase more modular and easier to manage.

//-------------------------------------------------------------------------------------------------------------------------------------------

// Import Express
const express = require ("express");

// Create an Express application
//we have created in the server.js
// const app = express();

// Create a router instance
const router = express.Router();

//import controller
// const {home , register} = require("../controllers/auth-controller");
const authControllers = require("../controllers/auth-controller");

// const signupSchema = require("../validators/auth-validator");
// const loginSchema = require("../validators/auth-validator");
const {signupSchema , loginSchema} = require("../validators/auth-validator");
const validate = require ("../middlewares/validate-middleware");
const authMiddleware = require ("../middlewares/auth-middleware")


// Define routes on the router
// router.get("/" , (req , res) => {
//     res.status(200).send("Welcom to best App");
// });
router.route("/").get(authControllers.home);


// router.get("/register" , (req , res) => {
//     res.status(200).send("Welocome to registartion");
// })
// router.route("/register").get(authControllers.register);
router
    .route("/register")
    .post(validate(signupSchema), authControllers.register);


//login 
router
    .route("/login")
    .post(validate(loginSchema), authControllers.login);

router.route("/user").get ( authMiddleware , authControllers.user);    


module.exports = router;