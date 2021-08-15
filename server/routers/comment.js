import { Router } from 'express';
import {
	getComments,
	uploadComment,
} from '../controllers/CommentControllers.js';

const router = new Router();

router.post('/', getComments);
router.post('/upload', uploadComment);

export default router;
