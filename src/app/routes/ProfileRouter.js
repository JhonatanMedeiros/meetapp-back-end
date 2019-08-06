import { Router } from 'express';

import UserController from '../controllers/UserController';

/**
 * @constant {express.Router}
 */
const router = Router();

router.get('/me', UserController.show);
router.put('/update', UserController.update);

export default router;
