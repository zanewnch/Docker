"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongodb_1 = require("./config/mongodb");
const mysql_1 = require("./config/mysql");
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', api_1.default);
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'AIOT Backend is running',
        timestamp: new Date().toISOString()
    });
});
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to AIOT Backend API',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            api: '/api'
        }
    });
});
async function startServer() {
    try {
        await (0, mongodb_1.connectToMongoDB)();
        await (0, mysql_1.connectToMySQL)();
        app.listen(PORT, () => {
            console.log(`🚀 AIOT Backend server is running on port ${PORT}`);
            console.log(`📋 Health check: http://localhost:${PORT}/health`);
            console.log(`🔗 API endpoints: http://localhost:${PORT}/api`);
        });
    }
    catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=index.js.map