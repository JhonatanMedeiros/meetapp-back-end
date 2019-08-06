import { Router } from 'express';

import MeetupController from '../controllers/MeetupController';

const router = Router();

router.get('/', MeetupController.index);
router.post('/', MeetupController.store);
router.put('/:id', MeetupController.update);
router.delete('/:id', MeetupController.delete);

export default router;
