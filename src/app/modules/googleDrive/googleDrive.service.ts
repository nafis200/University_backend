import { google } from "googleapis";
import config from "../../config";
import { Readable } from "stream";
import prisma from "../../../shared/prisma";

export const getGoogleDriveService = () => {
  const { clientId, clientSecret, redirectUri, refreshToken } =
    config.googleDrive;
  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );
  oauth2Client.setCredentials({ refresh_token: refreshToken || "" });
  return google.drive({ version: "v3", auth: oauth2Client });
};

export const GoogleDriveServices = {
  uploadToGoogleDrive: async (file: Express.Multer.File, title: string) => {
    const drive = getGoogleDriveService();
    const folderId = config.googleDrive.folderId;
    if (!folderId) throw new Error("Google Drive folder ID not found");

    const fileMetadata = { name: file.originalname, parents: [folderId] };
    const media = { mimeType: file.mimetype, body: Readable.from(file.buffer) };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media,
      fields: "id, webViewLink, webContentLink",
    });

    if (!response.data.id) throw new Error("Failed to upload file");

    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: { role: "reader", type: "anyone" },
    });

    // Save to Prisma DB
    const savedFile = await prisma.file.create({
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
    return await prisma.file.findMany({ orderBy: { createdAt: "desc" } });
  },

  deleteFile: async (fileId: string) => {
    const drive = getGoogleDriveService();

    await drive.files.delete({ fileId });

    return await prisma.file.delete({ where: { fileId } });
  },
};
