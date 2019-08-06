import { Router } from 'express';

import AuthRouter from './AuthRouter';
import ProfileRouter from './ProfileRouter';

import authMiddleware from '../middlewares/auth';

const router = new Router();

router.get('/ping', (req, res) => res.json({ message: 'Hello' }));

router.use('/auth', AuthRouter);

router.use(authMiddleware);

router.use('/profile', ProfileRouter);

export default router;
