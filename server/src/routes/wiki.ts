import { Router, Request, Response } from 'express';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

// Get all wiki pages
router.get('/', (req: AuthRequest, res: Response) => {
  res.json([
    { 
      _id: '1', 
      title: 'Introduction à la programmation', 
      content: 'Contenu de l\'article...', 
      slug: 'introduction-programmation',
      tags: ['programmation', 'débutant'],
      createdBy: 'user1',
      lastEditedBy: 'user1',
      contributors: ['user1'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]);
});

// Get wiki page by slug
router.get('/:slug', (req: AuthRequest, res: Response) => {
  const { slug } = req.params;
  res.json({ 
    _id: '1', 
    title: 'Introduction à la programmation', 
    content: 'Contenu de l\'article...', 
    slug,
    tags: ['programmation', 'débutant'],
    createdBy: 'user1',
    lastEditedBy: 'user1',
    contributors: ['user1'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
});

// Create new wiki page
router.post('/', authenticateToken, (req: AuthRequest, res: Response) => {
  const userId = req.user?.id || 'anonymous';
  
  res.status(201).json({ 
    ...req.body,
    _id: Date.now().toString(),
    slug: req.body.title.toLowerCase().replace(/\s+/g, '-'),
    createdBy: userId,
    lastEditedBy: userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
});

// Update wiki page
router.put('/:slug', authenticateToken, (req: AuthRequest, res: Response) => {
  const { slug } = req.params;
  const userId = req.user?.id || 'anonymous';
  
  res.json({ 
    ...req.body,
    _id: '1',
    slug,
    lastEditedBy: userId,
    updatedAt: new Date().toISOString()
  });
});

// Delete wiki page
router.delete('/:slug', authenticateToken, (req: AuthRequest, res: Response) => {
  res.status(200).json({ message: 'Wiki page deleted successfully' });
});

export default router;