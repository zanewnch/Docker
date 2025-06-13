-- MySQL 初始化腳本
-- 創建示例表格和數據

USE myapp_db;

-- 創建用戶表
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 創建產品表
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 插入示例數據
INSERT INTO users (username, email, password_hash) VALUES 
('admin', 'admin@example.com', '$2b$10$example_hash_here'),
('testuser', 'test@example.com', '$2b$10$example_hash_here');

INSERT INTO products (name, description, price, stock_quantity) VALUES 
('範例產品1', '這是第一個範例產品', 99.99, 100),
('範例產品2', '這是第二個範例產品', 149.99, 50);

-- 創建索引
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_products_name ON products(name);
