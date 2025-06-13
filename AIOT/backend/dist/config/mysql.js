"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.getPool = exports.connectToMySQL = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const DB_CONFIG = {
    host: process.env.DB_HOST || 'aiot-mysql',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'appuser',
    password: process.env.DB_PASSWORD || 'apppassword',
    database: process.env.DB_NAME || 'myapp_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};
const pool = promise_1.default.createPool(DB_CONFIG);
exports.pool = pool;
async function connectToMySQL() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connected to MySQL successfully');
        connection.release();
    }
    catch (error) {
        console.error('❌ MySQL connection error:', error);
        throw error;
    }
}
exports.connectToMySQL = connectToMySQL;
function getPool() {
    return pool;
}
exports.getPool = getPool;
exports.default = pool;
//# sourceMappingURL=mysql.js.map