require ("dotenv").config();
const express = require ("express");
var cors = require("cors")
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require ("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//lets tackle cors
const corsOptions = {
    //origin: "http://localhost:5173",
    origin: process.env.CLIENT_URL,
    methods : "GET , POST , PUT , DELETE , PATCH , HEAD ",
    credentials : true
};

app.use(cors(corsOptions));


app.use(express.json());

app.use("/api/auth" , authRoute );
app.use("/api/form" , contactRoute);
app.use("/api/data" , serviceRoute);


// lets define admin route
app.use("/api/admin" , adminRoute);




// app.get ("/" , (req , res) => {
//     res.status(200).send("Welcome to world best mern series by thapa technical");
// });

// app.get ("/register" , (req , res) => {
//     res.status(200).send("Welcome to registration page");
// });


app.use (errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen (PORT , () => {
        console.log(`server is running at port : ${PORT}`);
    })
})
