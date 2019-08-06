import { Router } from 'express';

import MeetupController from '../controllers/MeetupController';
import SubscriptionController from '../controllers/SubscriptionController';

const router = Router();

router.get('/', MeetupController.index);
router.post('/', MeetupController.store);
router.put('/:id', MeetupController.update);
router.delete('/:id', MeetupController.delete);
router.post('/:id/subscriptions', SubscriptionController.store);

export default router;
