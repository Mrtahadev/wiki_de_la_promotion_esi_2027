import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import config from './config';

// Routes
import authRoutes from './routes/auth';
import wikiRoutes from './routes/wiki';
import internshipRoutes from './routes/internships';
import chatbotRoutes from './routes/chatbot';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/wiki-esi-2027';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    // Don't crash the server if MongoDB connection fails
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/wiki', wikiRoutes);
app.use('/api/internships', internshipRoutes);
app.use('/api/chatbot', chatbotRoutes);

// Base route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Wiki ESI 2027 API is running' });
});

// Create HTTP server
const server = http.createServer(app);

// Socket.io setup
const io = new SocketServer(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Socket.io event handlers
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  // Handle joining wiki page edit sessions
  socket.on('join-wiki-page', (pageId: string) => {
    socket.join(`wiki:${pageId}`);
  });
  
  // Handle real-time wiki updates
  socket.on('wiki-update', (data: { pageId: string, content: string, user: string }) => {
    socket.to(`wiki:${data.pageId}`).emit('wiki-updated', data);
  });
  
  // Handle chat messages
  socket.on('chat-message', (data: { room: string, message: string, user: string }) => {
    io.to(data.room).emit('new-message', data);
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Handle 404 routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = config.port;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${config.nodeEnv} mode`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.error('Unhandled Promise Rejection:', err);
  // Don't crash the server
}); 