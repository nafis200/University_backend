"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OthersAnnouncementRoutes = void 0;
const express_1 = __importDefault(require("express"));
const OtherNotice_controller_1 = require("./OtherNotice.controller");
const router = express_1.default.Router();
router.post("/", OtherNotice_controller_1.OthersAnnouncementController.create);
router.get("/", OtherNotice_controller_1.OthersAnnouncementController.getAll);
router.delete("/:id", OtherNotice_controller_1.OthersAnnouncementController.delete);
exports.OthersAnnouncementRoutes = router;
//# sourceMappingURL=otherNotice.route.js.map