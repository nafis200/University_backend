import { Response } from "express";
declare const sendResponse: <T>(res: Response, jsonData: {
    success: boolean;
    status: number;
    message: string;
    data?: T | null | undefined;
}) => void;
export default sendResponse;
//# sourceMappingURL=sendResponse.d.ts.map