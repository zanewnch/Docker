import express from 'express';
import { getPool } from '../config/mysql';
import mongoose from '../config/mongodb';

const router = express.Router();

// Test MongoDB connection
router.get('/test/mongodb', async (req, res) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;
    res.json({
      status: isConnected ? 'connected' : 'disconnected',
      database: 'MongoDB',
      message: isConnected ? 'MongoDB connection is healthy' : 'MongoDB connection failed'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'MongoDB',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Test MySQL connection
router.get('/test/mysql', async (req, res) => {
  try {
    const pool = getPool();
    const [rows] = await pool.execute('SELECT 1 as test');
    res.json({
      status: 'connected',
      database: 'MySQL',
      message: 'MySQL connection is healthy',
      test: rows
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'MySQL',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Sample API endpoints
router.get('/status', (req, res) => {
  res.json({
    api: 'AIOT Backend API',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

router.get('/info', (req, res) => {
  res.json({
    project: 'AIOT Platform',
    description: 'Artificial Intelligence Internet of Things',
    technologies: [
      'Express.js',
      'TypeScript',
      'MySQL',
      'MongoDB',
      'Docker'
    ]
  });
});

export default router;
