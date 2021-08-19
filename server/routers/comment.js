import { Router } from 'express';
import {
	deleteAllComments,
	getComments,
	uploadComment,
	updateComment,
	deleteComment,
} from '../controllers/CommentControllers.js';

const router = new Router();

router.get('/:id', getComments);
router.post('/', uploadComment);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);
// router.delete('/delete-all', deleteAllComments);

export default router;
