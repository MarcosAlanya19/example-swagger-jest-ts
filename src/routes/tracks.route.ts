import express from 'express';
import * as trackCtrl from '../controllers/tracks.controller';
import { validatorCreateItem, validatorDeleteItem, validatorGetItem, validatorUpdateItem } from '../validators/tracks.validator';
import { authMiddleware } from '../middlewares/session';

const router = express.Router();

router.route('/').get(authMiddleware, trackCtrl.getItems).post(validatorCreateItem, trackCtrl.createItem);
router.route('/:id').get(validatorGetItem, trackCtrl.getItem).put(validatorUpdateItem, trackCtrl.updateItem).delete(validatorDeleteItem, trackCtrl.deleteItem);

export default router;
