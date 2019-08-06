import { Router } from 'express';

import UserController from '../controllers/UserController';
import SessionController from '../controllers/SessionController';

import SignupValidation from '../validations/SignupValidation';
import SiginValidation from '../validations/SiginValidation';

const router = Router();

router.post('/signup', SignupValidation, UserController.store);

router.post('/login', SiginValidation, SessionController.store);

export default router;
