"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRouter = void 0;
const express_1 = __importDefault(require("express"));
const image_controller_1 = require("./image.controller");
const fileUploader_1 = require("../../../helpars/fileUploader");
const router = express_1.default.Router();
router.post("/", fileUploader_1.fileUploader.upload.single("image"), image_controller_1.ImageControllers.upsertImage);
router.get("/:gstApplicationId", image_controller_1.ImageControllers.getImage);
exports.ImageRouter = router;
//# sourceMappingURL=images.route.js.map