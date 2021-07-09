import { Router } from 'express';
import {
	userSignUp,
	userSignIn,
	userRefreshToken,
	userSignOut,
} from '../controllers/UserControllers.js';
import { authToken } from '../middles/auth.js';

const router = new Router();

router.post('/sign-up', userSignUp);
router.post('/sign-in', userSignIn);
router.post('/refresh-token', userRefreshToken);
router.post('/sign-out', userSignOut);

export default router;
