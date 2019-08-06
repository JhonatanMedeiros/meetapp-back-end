import { Router } from 'express';

import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';

const router = Router();

router.post('/signup', UserController.store);

router.post('/login', SessionController.store);

export default router;
