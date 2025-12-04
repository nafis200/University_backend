"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllDataRoutes = void 0;
const express_1 = require("express");
const getalldata_controller_1 = require("./getalldata.controller");
const router = (0, express_1.Router)();
router.get("/fetch", getalldata_controller_1.GetAllDataController.getUsersByUnit);
exports.AllDataRoutes = router;
//# sourceMappingURL=getalldata.route.js.map