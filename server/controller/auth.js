import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../model/userSchema.js';
import * as dotenv from 'dotenv';
dotenv.config();

// Passport strategy configuration
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.REDIRECT_URL,
},
    async function (accessToken, refreshToken, profile, cb) {
        // Check if the user already exists in the database
        const existingUser = await User.findOne({ 'google.id': profile.id });

        if (existingUser) {
            // If the user exists, return the existing user
            return cb(null, existingUser);
        }

        // If the user doesn't exist, create a new user
        const newUser = new User({
            google: {
                id: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
            },
        });

        // Save the new user to the database
        await newUser.save();

        // Return the new user
        return cb(null, newUser);
    }));

// Serialization and deserialization functions
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;
