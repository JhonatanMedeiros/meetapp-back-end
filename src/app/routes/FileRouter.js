import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';

import FileController from '../controllers/FileController';

const upload = multer(multerConfig);
const router = Router();

router.post('/', upload.single('file'), FileController.store);

export default router;
