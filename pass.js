const express = require('express');
const passport = require('passport');
const GoogleStrategy= require('passport-google-oauth20').Strategy;
const app=express();
const keys=require('./config/key')
console.log("This is the clientID: "+keys.googleClientID)
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    console.log('acccess token', accessToken);
    console.log('acccess token', refreshToken);
    console.log('acccess token', profile);


    }
  )
);
const PORT= process.env.PORT || 5000;
host="0.0.0.0";
app.get(
    '/auth/google',
    passport.authenticate('google',{
        scope:['profile','email']
}))
app.get('/auth/google/callback',passport.authenticate('google'));
app.listen(PORT,host, function (){
    console.log("Server Started");
});