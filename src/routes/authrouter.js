const authController=require('../services/authService');

const routes=(app)=>{
    app.post('/api/v1/auth/signup',
    authController.signup);

    app.post('/api/v1/auth/sigin',authController.signin);

    app.patch('/api/v1/auth/reset',authController.resetPassword);
};
module.exports=routes;
