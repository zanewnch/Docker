"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URL || 'mongodb://admin:adminpassword@aiot-mongodb:27017/myapp_db?authSource=admin';
async function connectToMongoDB() {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB successfully');
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        throw error;
    }
}
exports.connectToMongoDB = connectToMongoDB;
exports.default = mongoose_1.default;
//# sourceMappingURL=mongodb.js.map