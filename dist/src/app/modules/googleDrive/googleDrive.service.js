"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleDriveServices = exports.getGoogleDriveService = void 0;
const googleapis_1 = require("googleapis");
const config_1 = __importDefault(require("../../config"));
const stream_1 = require("stream");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const getGoogleDriveService = () => {
    const { clientId, clientSecret, redirectUri, refreshToken } = config_1.default.googleDrive;
    const oauth2Client = new googleapis_1.google.auth.OAuth2(clientId, clientSecret, redirectUri);
    oauth2Client.setCredentials({ refresh_token: refreshToken || "" });
    return googleapis_1.google.drive({ version: "v3", auth: oauth2Client });
};
exports.getGoogleDriveService = getGoogleDriveService;
exports.GoogleDriveServices = {
    uploadToGoogleDrive: async (file, title) => {
        const drive = (0, exports.getGoogleDriveService)();
        const folderId = config_1.default.googleDrive.folderId;
        if (!folderId)
            throw new Error("Google Drive folder ID not found");
        const fileMetadata = { name: file.originalname, parents: [folderId] };
        const media = { mimeType: file.mimetype, body: stream_1.Readable.from(file.buffer) };
        const response = await drive.files.create({
            requestBody: fileMetadata,
            media,
            fields: "id, webViewLink, webContentLink",
        });
        if (!response.data.id)
            throw new Error("Failed to upload file");
        await drive.permissions.create({
            fileId: response.data.id,
            requestBody: { role: "reader", type: "anyone" },
        });
        // Save to Prisma DB
        const savedFile = await prisma_1.default.file.create({
            data: {
                fileId: response.data.id,
                title,
                viewLink: response.data.webViewLink || "",
                downloadLink: response.data.webContentLink || "",
            },
        });
        return savedFile;
    },
    getAllFiles: async () => {
        return await prisma_1.default.file.findMany({ orderBy: { createdAt: "desc" } });
    },
    deleteFile: async (fileId) => {
        const drive = (0, exports.getGoogleDriveService)();
        await drive.files.delete({ fileId });
        return await prisma_1.default.file.delete({ where: { fileId } });
    },
};
//# sourceMappingURL=googleDrive.service.js.map