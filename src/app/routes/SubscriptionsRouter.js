import { Router } from 'express';

import SubscriptionController from '../controllers/SubscriptionController';

const router = Router();

router.get('/', SubscriptionController.index);

export default router;
