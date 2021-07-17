import { Router } from 'express';
import {
	readPost,
	createPost,
	updatePost,
	deletePost,
} from '../controllers/PostControllers.js';
// import { authToken } from '../middles/auth.js';

const router = Router();

router.get('/', readPost);

router.post('/create', createPost);

router.put('/update', updatePost);

router.delete('/delete', deletePost);

export default router;
