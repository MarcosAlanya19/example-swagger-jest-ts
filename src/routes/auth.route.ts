import express from 'express';
import * as authCtrl from '../controllers/auth.controller';
import { validatorLogin, validatorRegister } from '../validators/auth.validator';

const router = express.Router();

router.post('/register', validatorLogin, authCtrl.register);
router.post('/login', validatorRegister, authCtrl.login);

export default router;
