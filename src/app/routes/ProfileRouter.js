import { Router } from 'express';

import UserController from '../controllers/UserController';

import ProfileUpdateValidation from '../validations/ProfileUpdateValidation';

/**
 * @constant {express.Router}
 */
const router = Router();

router.get('/me', UserController.show);
router.put('/update', ProfileUpdateValidation, UserController.update);

export default router;
