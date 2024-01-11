// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const app = express();
// const port = 3001;

// // Configure passport
// passport.use(new GoogleStrategy({
//     clientID: "49789606941-l9e87oavvaee7713o7ahetp4b6l3h0m6.apps.googleusercontent.com",
//     clientSecret: "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",
//     callbackURL: 'http://localhost:3001/auth/google/callback',
// }, (accessToken, refreshToken, profile, done) => {
//     return done(null, profile);
// }));

// passport.serializeUser((user, done) => {
//     done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//     done(null, obj);
// });

// app.use(session({
//     secret:"CrafyHub",
//     resave:false,
//     saveUninitialized:true,
//     cookie:{secure:false}
// }))

// // Configure Express
// app.use(require('express-session')({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Routes
// // app.get('/', (req, res) => {
// //     res.send('Home Page');
// // });


// app.get('/auth/google',
//    (req, res, next) => {
//        console.log('Authentication Scope:', ['profile', 'email']);
//        next();
//    },
//    passport.authenticate('google', { scope: ['profile', 'email'] })
// );


// app.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         res.redirect('/');
//     }
// );

// app.use('/logout',(req,res)=>{
//     req.session.destroy()
//     res.send("See you again")
// })
// app.post('/logout', function(req, res, next) {
//     req.logout(function(err) {
//       if (err) { return next(err); }
//       res.redirect('/');
//     });
//   });


// app.get('/', (req, res) => {
//     if (!req.isAuthenticated()) {
//         return res.send('Hello Login');
//     }
//     res.send(`<h1>Hello ${req.user.displayName}<br>${req.user.displayEmail}</h1><a href="/logout">Logout</a>`);
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });



const express = require('express');
const app = express();

app.enable('trust proxy'); // Enable reverse proxy support, assuming you're behind a reverse proxy

app.use((req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  console.log(`User IP Address: ${ip}`);
  next();
});

app.get("/",(req,res)=>{
    res.send("Hii")
})

// Your other routes and middleware go here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
