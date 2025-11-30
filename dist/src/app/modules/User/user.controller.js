"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_sevice_1 = require("./user.sevice");
const createAdmin = async (req, res) => {
    try {
        const result = await user_sevice_1.userService.createAdmin(req.body);
        res.status(200).json({
            success: true,
            message: "Admin Created sucessfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err?.name || "Something went wrong",
            error: err
        });
    }
};
exports.UserController = {
    createAdmin,
};
//# sourceMappingURL=user.controller.js.map