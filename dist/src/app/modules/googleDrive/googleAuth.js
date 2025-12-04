"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoogleDriveService = void 0;
const googleapis_1 = require("googleapis");
const config_1 = __importDefault(require("../../config"));
const getGoogleDriveService = () => {
    const { clientId, clientSecret, redirectUri, refreshToken } = config_1.default.googleDrive;
    const oauth2Client = new googleapis_1.google.auth.OAuth2(clientId, clientSecret, redirectUri);
    oauth2Client.setCredentials({ refresh_token: refreshToken || null });
    return googleapis_1.google.drive({ version: "v3", auth: oauth2Client });
};
exports.getGoogleDriveService = getGoogleDriveService;
//# sourceMappingURL=googleAuth.js.map