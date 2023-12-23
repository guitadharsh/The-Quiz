import { Router } from "express";
import passport from '../controller/auth.js'
import * as dotenv from "dotenv";
dotenv.config();
const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: process.env.FAILURE_URL }),
    (req, res) => {
        // Successful authentication, redirect to the home page or wherever you want
        res.redirect(process.env.SUCCESS_URL);
    }
);

router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        res.redirect("http://localhost:5173/auth");
    });
});



export default router;