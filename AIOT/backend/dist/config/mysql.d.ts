import mysql from 'mysql2/promise';
declare const pool: mysql.Pool;
export declare function connectToMySQL(): Promise<void>;
export declare function getPool(): mysql.Pool;
export { pool };
export default pool;
//# sourceMappingURL=mysql.d.ts.map