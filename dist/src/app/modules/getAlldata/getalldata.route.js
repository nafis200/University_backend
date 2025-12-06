"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllDataRoutes = void 0;
const express_1 = require("express");
const getalldata_controller_1 = require("./getalldata.controller");
const router = (0, express_1.Router)();
router.get("/fetch", getalldata_controller_1.getUsersByUnit);
exports.AllDataRoutes = router;
// GET http://localhost:3000/api/info/fetch?excludeRole=STUDENTS&page=1&limit=10
// GET http://localhost:3000/api/info/fetch?role=STUDENTS&page=1&limit=10
// http://localhost:5000/api/info/fetch?role=STUDENTS&department=computer Science&notDepartment=not-null
// http://localhost:5000/api/info/fetch?role=STUDENTS&notDepartment=null
//# sourceMappingURL=getalldata.route.js.map