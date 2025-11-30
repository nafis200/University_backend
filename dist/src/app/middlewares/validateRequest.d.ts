import { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod/v3";
declare const validateRequest: (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default validateRequest;
//# sourceMappingURL=validateRequest.d.ts.map