// In Express.js, a router is a component that allows you to manage different routes of your web application. It is used to define endpoints (URIs) and how they should respond to client requests. Routers help to organize your application by grouping related route handlers together, which makes the codebase more modular and easier to manage.

//-------------------------------------------------------------------------------------------------------------------------------------------


const express = require ("express");
const router = express.Router();
const contactForm = require ("../controllers/contact-controller.js");

router.route("/contact").post(contactForm);



module.exports = router;