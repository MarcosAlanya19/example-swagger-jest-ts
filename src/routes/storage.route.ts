import express from 'express';
import * as storageCtrl from '../controllers/storage.controller';
import { uploadMiddleware } from '../utils/handleStorage';
import { validatorDeleteItem, validatorGetItem } from '../validators/storage.validator';

const router = express.Router();

router.route('/').get(storageCtrl.getItems).post(uploadMiddleware.single('myfile'), storageCtrl.createItem);
router.route('/:id').get(validatorGetItem, storageCtrl.getItem).delete(validatorDeleteItem, storageCtrl.deleteItem);

export default router;
