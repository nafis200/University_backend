import PQueue from "p-queue";
import { generatePDFBuffer } from "./pdf.service";

const queue = new PQueue({ concurrency: 1 }); 
export const safeGeneratePDF = async (html: string) => {
  return queue.add(() => generatePDFBuffer(html));
};