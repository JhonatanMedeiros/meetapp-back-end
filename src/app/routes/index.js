import { Router } from 'express';

import AuthRouter from './AuthRouter';
import ProfileRouter from './ProfileRouter';
import FileRouter from './FileRouter';
import MeetupRouter from './MeetupRouter';
import OrganizingRouter from './OrganizingRouter';

import authMiddleware from '../middlewares/auth';

const router = new Router();

router.get('/ping', (req, res) => res.json({ message: 'Hello' }));

router.use('/auth', AuthRouter);

router.use(authMiddleware);

router.use('/profile', ProfileRouter);

router.use('/files', FileRouter);

router.use('/meetups', MeetupRouter);

router.use('/organizing', OrganizingRouter);

router.use('/subscriptions', OrganizingRouter);

export default router;
