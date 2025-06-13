// MongoDB 初始化腳本
// 創建示例集合和數據

// 切換到應用資料庫
db = db.getSiblingDB('myapp_db');

// 創建用戶集合
db.createCollection('users');

// 創建產品集合
db.createCollection('products');

// 創建日誌集合
db.createCollection('logs');

// 插入示例用戶數據
db.users.insertMany([
    {
        username: 'admin',
        email: 'admin@example.com',
        profile: {
            firstName: 'Admin',
            lastName: 'User',
            age: 30
        },
        roles: ['admin', 'user'],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        username: 'testuser',
        email: 'test@example.com',
        profile: {
            firstName: 'Test',
            lastName: 'User',
            age: 25
        },
        roles: ['user'],
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// 插入示例產品數據
db.products.insertMany([
    {
        name: 'MongoDB 範例產品1',
        description: '這是存儲在 MongoDB 中的第一個範例產品',
        categories: ['電子產品', '3C'],
        price: 199.99,
        inventory: {
            quantity: 50,
            warehouse: 'A1'
        },
        tags: ['新品', '熱門'],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'MongoDB 範例產品2',
        description: '這是存儲在 MongoDB 中的第二個範例產品',
        categories: ['服裝', '配件'],
        price: 79.99,
        inventory: {
            quantity: 30,
            warehouse: 'B2'
        },
        tags: ['促銷', '限量'],
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// 創建索引
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "username": 1 }, { unique: true });
db.products.createIndex({ "name": 1 });
db.products.createIndex({ "categories": 1 });
db.products.createIndex({ "tags": 1 });

// 插入初始日誌
db.logs.insertOne({
    message: 'MongoDB 資料庫初始化完成',
    level: 'info',
    timestamp: new Date(),
    source: 'init-script'
});

print('MongoDB 初始化腳本執行完成！');
