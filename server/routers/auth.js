import { Router } from 'express';
import {
	userSignUp,
	userSignIn,
	// userLogged
} from '../controllers/AuthControllers.js';
// import { authToken } from '../middles/auth.js';

const router = new Router();

router.post('/sign-up', userSignUp);
router.post('/sign-in', userSignIn);
// router.get('/', userLogged);

export default router;
