"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelRoute = void 0;
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const excel_controller_1 = require("./excel.controller");
const router = express_1.default.Router();
const upload = (0, multer_1.default)({ dest: 'uploads/' });
router.post('/file', upload.single('file'), excel_controller_1.FileController.uploadFile);
router.get("/:gstApplicationId", excel_controller_1.FileController.getDateApplication);
router.put("/:gstApplicationId", excel_controller_1.FileController.updateDateApplication);
router.put("/update/:gstApplicationId", excel_controller_1.FileController.updateDateStatus);
exports.ExcelRoute = router;
//# sourceMappingURL=excel.route.js.map