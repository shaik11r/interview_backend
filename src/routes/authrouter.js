const authController=require('../services/authService');
const authMiddleware=require('../middleware/authMiddleware');
const routes=(app)=>{
    app.post('/api/v1/auth/signup',authMiddleware.validateSignupRequest,
    authController.signup);

    app.post('/api/v1/auth/sigin',authMiddleware.validateSigninRequest,authController.signin);

    app.patch('/api/v1/auth/reset',authMiddleware.isAuthenticated,authController.resetPassword);
    app.get('/hoi',authMiddleware.isAuthenticated,(req,res)=>{
       return  res.status(200).send(
            {
            message:"just checking isAuth"
        }
        )
    })
    
};
module.exports=routes;
