import { Router } from 'express';
import {
	readCard,
	createCard,
	updateCard,
	deleteCard,
} from '../controllers/CardControllers.js';
import { authToken } from '../middles/auth.js';

const router = Router();

router.get('/', readCard);

router.post('/', authToken, createCard);

router.put('/update', updateCard);

router.delete('/delete', deleteCard);

export default router;
