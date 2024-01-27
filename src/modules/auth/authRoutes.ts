import express, { Router } from 'express';

import { AuthController } from '@modules/auth/authController';
import { AuthService } from '@modules/auth/authService';

const router: Router = express.Router();
const authService: AuthService = new AuthService();
const controller: AuthController = new AuthController(authService);

router.post('/login', controller.loginUser);
router.post('/signup', controller.registerUser);
router.post('/logout', controller.logoutUser);

export const authRouter: Router = router;
