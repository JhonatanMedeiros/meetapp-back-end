import { Router } from 'express';

import MeetupController from '../controllers/MeetupController';
import SubscriptionController from '../controllers/SubscriptionController';

import MeetupValidation from '../validations/MeetupValidation';

const router = Router();

router.get('/', MeetupController.index);
router.post('/', MeetupValidation, MeetupController.store);
router.put('/:id', MeetupValidation, MeetupController.update);
router.delete('/:id', MeetupController.delete);
router.post('/:id/subscriptions', SubscriptionController.store);

export default router;
