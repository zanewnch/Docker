"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = require("../config/mysql");
const mongodb_1 = __importDefault(require("../config/mongodb"));
const router = express_1.default.Router();
router.get('/test/mongodb', async (req, res) => {
    try {
        const isConnected = mongodb_1.default.connection.readyState === 1;
        res.json({
            status: isConnected ? 'connected' : 'disconnected',
            database: 'MongoDB',
            message: isConnected ? 'MongoDB connection is healthy' : 'MongoDB connection failed'
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            database: 'MongoDB',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
router.get('/test/mysql', async (req, res) => {
    try {
        const pool = (0, mysql_1.getPool)();
        const [rows] = await pool.execute('SELECT 1 as test');
        res.json({
            status: 'connected',
            database: 'MySQL',
            message: 'MySQL connection is healthy',
            test: rows
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            database: 'MySQL',
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
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
exports.default = router;
//# sourceMappingURL=api.js.map