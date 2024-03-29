import { Router } from 'express'
import { registerUser, loginUser, logoutUser } from '../controllers/user.controller.js'
import { upload } from '../middlewares/multer.middleware.js'
import { verifyJwtToken } from '../middlewares/auth.middleware.js'

const router = Router()

router.route('/register').post(upload.single('avatar'), registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(verifyJwtToken, logoutUser)

export default router;