const mongoose = require ("mongoose");


//const URL = "mongodb://127.0.0.1:27017/mern_admin"
//mongoose.connect(URL);

const URL = process.env.MONGODB_URL;


const connectDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("connection sucessful to DB");
        
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
        
    }
};

module.exports = connectDb;