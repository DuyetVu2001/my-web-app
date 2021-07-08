import { Router } from 'express';
import { readLogin, createLogin } from '../controllers/LoginControllers.js';
import { authToken } from '../middles/auth.js';

const router = new Router();

router.get('/', authToken, readLogin);
router.post('/', createLogin);

export default router;
