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

  await prisma.$transaction(async (tx) => {
    for (let i = 0; i < Users.length; i++) {
      const userRow = Users[i];
      const personalInfoRow = PersonalInfos[i];
      const eduRow = EducationalInfos[i];
      const hscSummaryRow = HscSummaries[i];
      const hscMarksRow = HscMarksList[i];
      const rawResultRow = RawResults[i];
      const omrResultRow = OmrResults[i];

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
          unit: userRow.unit ?? "A",
          faculty: null,
          status: UserStatus.ACTIVE,
          role: UserRole.STUDENTS,
        },
      });

      await tx.personalInfo.upsert({
        where: { gstApplicationId: personalInfoRow.gstApplicationId },
        create: {
          gstApplicationId: personalInfoRow.gstApplicationId,
          Name: personalInfoRow.Name ?? null,
          Father: personalInfoRow.Father ?? null,
          Mother: personalInfoRow.Mother ?? null,
          Dob: personalInfoRow.Dob ?? null,
          Gender: personalInfoRow.Gender ?? null,
        },
        update: {
          Name: personalInfoRow.Name ?? null,
          Father: personalInfoRow.Father ?? null,
          Mother: personalInfoRow.Mother ?? null,
          Dob: personalInfoRow.Dob ?? null,
          Gender: personalInfoRow.Gender ?? null,
        },
      });

      await tx.educationalInfo.upsert({
        where: { gstApplicationId: eduRow.gstApplicationId },
        create: {
          gstApplicationId: eduRow.gstApplicationId,
          SSCBoard: eduRow.SSCBoard ?? null,
          SSCYear: eduRow.SSCYear ?? null,
          SSCRoll: eduRow.SSCRoll ?? null,
          SSCGpa: eduRow.SSCGpa ?? null,
          HSCBoard: eduRow.HSCBoard ?? null,
          HSCYear: eduRow.HSCYear ?? null,
          HSCRoll: eduRow.HSCRoll ?? null,
          HSCGpa: eduRow.HSCGpa ?? null,
          HSCSubject: eduRow.HSCSubject ?? null,
          SSCSubject: eduRow.SSCSubject ?? null,
        },
        update: {
          SSCBoard: eduRow.SSCBoard ?? null,
          SSCYear: eduRow.SSCYear ?? null,
          SSCRoll: eduRow.SSCRoll ?? null,
          SSCGpa: eduRow.SSCGpa ?? null,
          HSCBoard: eduRow.HSCBoard ?? null,
          HSCYear: eduRow.HSCYear ?? null,
          HSCRoll: eduRow.HSCRoll ?? null,
          HSCGpa: eduRow.HSCGpa ?? null,
          HSCSubject: eduRow.HSCSubject ?? null,
          SSCSubject: eduRow.SSCSubject ?? null,
        },
      });

      await tx.hscSummary.upsert({
        where: { gstApplicationId: hscSummaryRow.gstApplicationId },
        create: {
          gstApplicationId: hscSummaryRow.gstApplicationId,
          HscExamName: hscSummaryRow.HscExamName ?? null,
          HscStudyGroup: hscSummaryRow.HscStudyGroup ?? null,
          HscStudyType: hscSummaryRow.HscStudyType ?? null,
          HscTotalObtained: hscSummaryRow.HscTotalObtained ?? null,
          HscFullMarks: hscSummaryRow.HscFullMarks ?? null,
          HscConverted1000: hscSummaryRow.HscConverted1000 ?? null,
        },
        update: {
          HscExamName: hscSummaryRow.HscExamName ?? null,
          HscStudyGroup: hscSummaryRow.HscStudyGroup ?? null,
          HscStudyType: hscSummaryRow.HscStudyType ?? null,
          HscTotalObtained: hscSummaryRow.HscTotalObtained ?? null,
          HscFullMarks: hscSummaryRow.HscFullMarks ?? null,
          HscConverted1000: hscSummaryRow.HscConverted1000 ?? null,
        },
      });

      await tx.hscMarks.upsert({
        where: { gstApplicationId: hscMarksRow.gstApplicationId },
        create: {
          gstApplicationId: hscMarksRow.gstApplicationId,
          BanglaLG: hscMarksRow.BanglaLG ?? null,
          BanglaGP: hscMarksRow.BanglaGP ?? null,
          BanglaMarks: hscMarksRow.BanglaMarks ?? null,
          EnglishLG: hscMarksRow.EnglishLG ?? null,
          EnglishGP: hscMarksRow.EnglishGP ?? null,
          EnglishMarks: hscMarksRow.EnglishMarks ?? null,
          PhysicsLG: hscMarksRow.PhysicsLG ?? null,
          PhysicsGP: hscMarksRow.PhysicsGP ?? null,
          PhysicsMarks: hscMarksRow.PhysicsMarks ?? null,
          ChemistryLG: hscMarksRow.ChemistryLG ?? null,
          ChemistryGP: hscMarksRow.ChemistryGP ?? null,
          ChemistryMarks: hscMarksRow.ChemistryMarks ?? null,
          MathLG: hscMarksRow.MathLG ?? null,
          MathGP: hscMarksRow.MathGP ?? null,
          MathMarks: hscMarksRow.MathMarks ?? null,
          BiologyLG: hscMarksRow.BiologyLG ?? null,
          BiologyGP: hscMarksRow.BiologyGP ?? null,
          BiologyMarks: hscMarksRow.BiologyMarks ?? null,
        },
        update: {
          BanglaLG: hscMarksRow.BanglaLG ?? null,
          BanglaGP: hscMarksRow.BanglaGP ?? null,
          BanglaMarks: hscMarksRow.BanglaMarks ?? null,
          EnglishLG: hscMarksRow.EnglishLG ?? null,
          EnglishGP: hscMarksRow.EnglishGP ?? null,
          EnglishMarks: hscMarksRow.EnglishMarks ?? null,
          PhysicsLG: hscMarksRow.PhysicsLG ?? null,
          PhysicsGP: hscMarksRow.PhysicsGP ?? null,
          PhysicsMarks: hscMarksRow.PhysicsMarks ?? null,
          ChemistryLG: hscMarksRow.ChemistryLG ?? null,
          ChemistryGP: hscMarksRow.ChemistryGP ?? null,
          ChemistryMarks: hscMarksRow.ChemistryMarks ?? null,
          MathLG: hscMarksRow.MathLG ?? null,
          MathGP: hscMarksRow.MathGP ?? null,
          MathMarks: hscMarksRow.MathMarks ?? null,
          BiologyLG: hscMarksRow.BiologyLG ?? null,
          BiologyGP: hscMarksRow.BiologyGP ?? null,
          BiologyMarks: hscMarksRow.BiologyMarks ?? null,
        },
      });

      await tx.studentRawResults.upsert({
        where: { gstApplicationId: rawResultRow.gstApplicationId },
        create: {
          gstApplicationId: rawResultRow.gstApplicationId,
          HscMarksRaw: rawResultRow.HscMarksRaw ?? null,
          HscLetterGradeRaw: rawResultRow.HscLetterGradeRaw ?? null,
          SscLetterGradeRaw: rawResultRow.SscLetterGradeRaw ?? null,
        },
        update: {
          HscMarksRaw: rawResultRow.HscMarksRaw ?? null,
          HscLetterGradeRaw: rawResultRow.HscLetterGradeRaw ?? null,
          SscLetterGradeRaw: rawResultRow.SscLetterGradeRaw ?? null,
        },
      });

      await tx.omrResult.upsert({
        where: { gstApplicationId: omrResultRow.gstApplicationId },
        create: {
          gstApplicationId: omrResultRow.gstApplicationId,
          OmrPhysics: omrResultRow.OmrPhysics ?? null,
          OmrChemistry: omrResultRow.OmrChemistry ?? null,
          OmrMath: omrResultRow.OmrMath ?? null,
          OmrBiology: omrResultRow.OmrBiology ?? null,
          OmrBangla: omrResultRow.OmrBangla ?? null,
          OmrEnglish: omrResultRow.OmrEnglish ?? null,
          OmrTotal: omrResultRow.OmrTotal ?? null,
          OmrStatus: omrResultRow.OmrStatus ?? null,
          Position: omrResultRow.Position ?? null,
        },
        update: {
          OmrPhysics: omrResultRow.OmrPhysics ?? null,
          OmrChemistry: omrResultRow.OmrChemistry ?? null,
          OmrMath: omrResultRow.OmrMath ?? null,
          OmrBiology: omrResultRow.OmrBiology ?? null,
          OmrBangla: omrResultRow.OmrBangla ?? null,
          OmrEnglish: omrResultRow.OmrEnglish ?? null,
          OmrTotal: omrResultRow.OmrTotal ?? null,
          OmrStatus: omrResultRow.OmrStatus ?? null,
          Position: omrResultRow.Position ?? null,
        },
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
  });

  return tableData;
};

export const ExcelService = {
  uploadExcelFile,
};
