const {register,login,aboutus,contactus, fulldata} = require("../controller/user");
const userRoute = require("express").Router();
const {AllRoutes,specificRoutes}=require('../middleware/auth');


// userRoute.use(AllRoutes);

userRoute.post('/register',register);
userRoute.post('/login',login)
userRoute.get('/aboutus',aboutus)
userRoute.get('/contactus',contactus)
userRoute.get('/fulldata',fulldata)

module.exports = userRoute;