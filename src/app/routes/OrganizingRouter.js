import { Router } from 'express';

import OrganizingController from '../controllers/OrganizingController';

const router = Router();

router.get('/', OrganizingController.index);

export default router;
