import { Router } from "express";
import passport from '../controller/auth.js'
const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect to the home page or wherever you want
        res.redirect('/');
    }
);


export default router;