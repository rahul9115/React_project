const passport=require('passport');
const check=require('../mongodb/check')
const GoogleStrategy=require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: "679163885433-n15sv2bc33ngfbag862792kac6uiebfu.apps.googleusercontent.com",
    clientSecret:"9d0qjZpelRfjkNHB6WrtZk2D",
    callbackURL:"/auth/google/callback"
},(accessToken,refreshToken,profile,none)=>{
    
   var myobj = {googleId:profile.id};
   check(myobj);
  
    }
));
    

    
