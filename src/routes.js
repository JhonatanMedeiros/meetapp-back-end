import { Router } from 'express';

const router = new Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'Hello' });
});

export default router;
