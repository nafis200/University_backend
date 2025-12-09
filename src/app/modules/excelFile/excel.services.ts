import fs from "fs/promises";
import XLSX from "xlsx";
import { splitExcelRow } from "./excelDataParse";
import * as bcrypt from "bcrypt";

import { UserRole, UserStatus } from "@prisma/client";
import prisma from "../../../shared/prisma";

export type TableData = Record<string, Record<string, any>[]>;

const parseExcelFile = async (filePath: string): Promise<TableData> => {
  const workbook = XLSX.readFile(filePath);
  const data: TableData = {};

  workbook.SheetNames.forEach((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) return;
    const json = XLSX.utils.sheet_to_json(sheet, { defval: null }) as Record<
      string,
      any
    >[];
    data[sheetName] = json;
  });

  return data;
};

const uploadExcelFile = async (file: Express.Multer.File) => {
  if (!file) throw new Error("No file provided");

  console.log("Parsing Excel file...");
  const tableData = await parseExcelFile(file.path);

  const Users: any[] = [];
  const PersonalInfos: any[] = [];
  const EducationalInfos: any[] = [];
  const HscSummaries: any[] = [];
  const HscMarksList: any[] = [];
  const RawResults: any[] = [];
  const OmrResults: any[] = [];

  for (const sheetName in tableData) {
    const rows = tableData[sheetName];
    if (!rows) continue;

    rows.forEach((row) => {
      const parts = splitExcelRow(row);
      Users.push(parts.user);
      PersonalInfos.push(parts.personalInfo);
      EducationalInfos.push(parts.educationalInfo);
      HscSummaries.push(parts.hscSummary);
      HscMarksList.push(parts.hscMarks);
      RawResults.push(parts.rawResults);
      OmrResults.push(parts.omrResult);
    });
  }

  await fs.unlink(file.path);

  console.log(`Total rows to process: ${Users.length}`);

  const batchSize = 500;

  for (let i = 0; i < Users.length; i += batchSize) {
    const batchNumber = Math.floor(i / batchSize) + 1;
    console.log(`Processing batch ${batchNumber} (${i + 1} - ${Math.min(i + batchSize, Users.length)})...`);

    const batchUsers = Users.slice(i, i + batchSize);
    const batchPersonalInfos = PersonalInfos.slice(i, i + batchSize);
    const batchEducationalInfos = EducationalInfos.slice(i, i + batchSize);
    const batchHscSummaries = HscSummaries.slice(i, i + batchSize);
    const batchHscMarks = HscMarksList.slice(i, i + batchSize);
    const batchRawResults = RawResults.slice(i, i + batchSize);
    const batchOmrResults = OmrResults.slice(i, i + batchSize);

    try {
      await prisma.$transaction(
        async (tx) => {
          for (let j = 0; j < batchUsers.length; j++) {
            const userRow = batchUsers[j];
            const personalInfoRow = batchPersonalInfos[j];
            const eduRow = batchEducationalInfos[j];
            const hscSummaryRow = batchHscSummaries[j];
            const hscMarksRow = batchHscMarks[j];
            const rawResultRow = batchRawResults[j];
            const omrResultRow = batchOmrResults[j];

            const hashedPassword = await bcrypt.hash(userRow.password, 10);

            await tx.user.upsert({
              where: { gstApplicationId: userRow.gstApplicationId },
              create: {
                gstApplicationId: userRow.gstApplicationId,
                password: hashedPassword,
                unit: userRow.unit ?? "A",
                faculty: null,
                status: UserStatus.ACTIVE,
                role: UserRole.STUDENTS,
              },
              update: {
                password: hashedPassword,
                faculty: null,
                status: UserStatus.ACTIVE,
                role: UserRole.STUDENTS,
              },
            });

            await tx.personalInfo.upsert({
              where: { gstApplicationId: personalInfoRow.gstApplicationId },
              create: personalInfoRow,
              update: personalInfoRow,
            });

            await tx.educationalInfo.upsert({
              where: { gstApplicationId: eduRow.gstApplicationId },
              create: eduRow,
              update: eduRow,
            });

            await tx.hscSummary.upsert({
              where: { gstApplicationId: hscSummaryRow.gstApplicationId },
              create: hscSummaryRow,
              update: hscSummaryRow,
            });

            await tx.hscMarks.upsert({
              where: { gstApplicationId: hscMarksRow.gstApplicationId },
              create: hscMarksRow,
              update: hscMarksRow,
            });

            await tx.studentRawResults.upsert({
              where: { gstApplicationId: rawResultRow.gstApplicationId },
              create: rawResultRow,
              update: rawResultRow,
            });

            await tx.omrResult.upsert({
              where: { gstApplicationId: omrResultRow.gstApplicationId },
              create: omrResultRow,
              update: omrResultRow,
            });

            await tx.othersInfo.upsert({
              where: { gstApplicationId: userRow.gstApplicationId },
              create: { gstApplicationId: userRow.gstApplicationId },
              update: {},
            });

            await tx.approved.upsert({
              where: { gstApplicationId: userRow.gstApplicationId },
              create: { gstApplicationId: userRow.gstApplicationId },
              update: {},
            });

            await tx.document.upsert({
              where: { gstApplicationId: userRow.gstApplicationId },
              create: { gstApplicationId: userRow.gstApplicationId },
              update: {},
            });
          }
        },
        { timeout: 300000 } 
      );
      console.log(`Batch ${batchNumber} completed successfully.`);
    } catch (error) {
      console.error(`Batch ${batchNumber} failed:`, error);
    }
  }

  console.log("All batches processed.");
  return tableData;
};

export const ExcelService = {
  uploadExcelFile,
};
