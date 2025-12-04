"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovedRoutes = void 0;
const express_1 = require("express");
const approved_controller_1 = require("./approved.controller");
const router = (0, express_1.Router)();
router.post("/approved", approved_controller_1.ApprovedController.upsertApproval);
exports.ApprovedRoutes = router;
//# sourceMappingURL=approved.route.js.map