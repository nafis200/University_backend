import { google } from "googleapis";
import config from "../../config";

export const getGoogleDriveService = () => {
  const { clientId, clientSecret, redirectUri, refreshToken } = config.googleDrive;
  const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
  oauth2Client.setCredentials({ refresh_token: refreshToken || null });
  return google.drive({ version: "v3", auth: oauth2Client });
};

// 