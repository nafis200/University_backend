"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainRoutes = void 0;
const express_1 = require("express");
const complain_controller_1 = require("./complain.controller");
const router = (0, express_1.Router)();
router.post("/complains", complain_controller_1.ComplainController.createComplain);
router.put("/complains/:gstApplicationId", complain_controller_1.ComplainController.updateComplainStatus);
router.get("/complains", complain_controller_1.ComplainController.getComplains);
exports.ComplainRoutes = router;
//# sourceMappingURL=complain.route.js.map