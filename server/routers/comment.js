import { Router } from 'express';
import {
	deleteAllComments,
	getComments,
	uploadComment,
} from '../controllers/CommentControllers.js';

const router = new Router();

router.post('/', getComments);
router.post('/upload', uploadComment);
// router.delete('/delete-all', deleteAllComments);

export default router;
