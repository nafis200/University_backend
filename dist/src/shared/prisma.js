"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const config_1 = __importDefault(require("../app/config"));
const adapter = new adapter_pg_1.PrismaPg({
    connectionString: config_1.default.databaseUrl,
});
const prisma = new client_1.PrismaClient({
    adapter,
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map