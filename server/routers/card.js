import { Router } from 'express';
import {
	readCard,
	createCard,
	updateCard,
	deleteCard,
} from '../controllers/CardControllers.js';

const router = Router();

router.get('/', readCard);

router.post('/', createCard);

router.put('/update', updateCard);

router.delete('/delete', deleteCard);

export default router;
