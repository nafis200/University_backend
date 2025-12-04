"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsRoutes = void 0;
const express_1 = require("express");
const documents_controller_1 = require("./documents.controller");
const router = (0, express_1.Router)();
router.post("/documents", documents_controller_1.DocumentController.upsertDocuments);
exports.DocumentsRoutes = router;
//# sourceMappingURL=documents.route.js.map