import mysql from 'mysql2/promise';

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

// Initialize the pool immediately
const pool: mysql.Pool = mysql.createPool(DB_CONFIG);

export async function connectToMySQL(): Promise<void> {
  try {
    // Test the connection
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL successfully');
    connection.release();
  } catch (error) {
    console.error('❌ MySQL connection error:', error);
    throw error;
  }
}

export function getPool(): mysql.Pool {
  return pool;
}

export { pool };
export default pool;
