import express, { Request, Response, NextFunction } from 'express';
import { register, login, getProfile } from '../controllers/authController';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = express.Router();

// Register a new user
router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await register(req, res);
    } catch (error) {
        next(error); // Pass the error to Express error handling middleware
    }
});

// Login user
router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await login(req, res);
    } catch (error) {
        next(error);
    }
});

// Get user profile (protected route)
router.get('/profile', authenticateToken, async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        await getProfile(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;