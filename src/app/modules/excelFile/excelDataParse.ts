import { UserRole, UserStatus } from "@prisma/client";


const parseNullableNumber = (value: any): number | null => {
  if (value === null || value === undefined || value === "NULL" || value === "") return null;
  const num = Number(value);
  return isNaN(num) ? null : num;
};


const parseNullableString = (value: any): string | null => {
  if (value === null || value === undefined || value === "NULL" || value === "") return null;
  return String(value);
};


const parseNullableStringNumber = (value: any): string | null => {
  if (value === null || value === undefined || value === "NULL" || value === "") return null;
  return String(value);
};

export const splitExcelRow = (row: any) => {
  
  const gstApplicationId = String(row.applicant_id);
  const password = String(row.hsc_roll ?? "");


  const user = {
    gstApplicationId,
    password,
    unit: parseNullableString(row.unit) ?? "A",
    faculty: null,
    status: UserStatus.ACTIVE,
    role: UserRole.STUDENTS,
  };


  const personalInfo = {
    gstApplicationId,
    Name: parseNullableString(row.name),
    Father: parseNullableString(row.fname),
    Mother: parseNullableString(row.mname),
    Dob: parseNullableString(row.dob),
    Gender: parseNullableString(row.gender),
  };


  const educationalInfo = {
    gstApplicationId,
    SSCBoard: parseNullableString(row.ssc_board),
    SSCYear: parseNullableString(row.ssc_pass_year),
    SSCRoll: parseNullableString(row.ssc_roll),
    SSCGpa: parseNullableStringNumber(row.ssc_gpa), 
    HSCBoard: parseNullableString(row.hsc_board),
    HSCYear: parseNullableString(row.hsc_pass_year),
    HSCRoll: parseNullableString(row.hsc_roll),
    HSCGpa: parseNullableStringNumber(row.hsc_gpa),  
    HSCSubject: parseNullableString(row.hsc_study_group),
    SSCSubject: parseNullableString(row.ssc_study_group),
  };


  const hscSummary = {
    gstApplicationId,
    HscExamName: parseNullableString(row.hsc_exam_name),
    HscStudyGroup: parseNullableString(row.hsc_study_group),
    HscStudyType: parseNullableString(row.hsc_study_type),
    HscTotalObtained: parseNullableNumber(row.hsc_tot_obt),
    HscFullMarks: parseNullableNumber(row.hsc_full),
    HscConverted1000: parseNullableNumber(row.hsc_conv_1000),
  };


  const hscMarks = {
    gstApplicationId,
    BanglaLG: parseNullableString(row.hsc_bangla_lg),
    BanglaGP: parseNullableNumber(row.hsc_bangla_gp),
    BanglaMarks: parseNullableNumber(row.hsc_bangla_marks),

    EnglishLG: parseNullableString(row.hsc_english_lg),
    EnglishGP: parseNullableNumber(row.hsc_english_gp),
    EnglishMarks: parseNullableNumber(row.hsc_english_marks),

    PhysicsLG: parseNullableString(row.hsc_physics_lg),
    PhysicsGP: parseNullableNumber(row.hsc_physics_gp),
    PhysicsMarks: parseNullableNumber(row.hsc_physics_marks),

    ChemistryLG: parseNullableString(row.hsc_chemistry_lg),
    ChemistryGP: parseNullableNumber(row.hsc_chemistry_gp),
    ChemistryMarks: parseNullableNumber(row.hsc_chemistry_marks),

    MathLG: parseNullableString(row.hsc_mathe_lg),
    MathGP: parseNullableNumber(row.hsc_mathe_gp),
    MathMarks: parseNullableNumber(row.hsc_mathe_marks),

    BiologyLG: parseNullableString(row.hsc_biology_lg),
    BiologyGP: parseNullableNumber(row.hsc_biology_gp),
    BiologyMarks: parseNullableNumber(row.hsc_biology_marks),
  };


  const rawResults = {
    gstApplicationId,
    HscMarksRaw: parseNullableString(row.hsc_marks),
    HscLetterGradeRaw: parseNullableString(row.hsc_ltrgd),
    SscLetterGradeRaw: parseNullableString(row.ssc_ltrgrd),
  };


  const omrResult = {
    gstApplicationId,
    OmrPhysics: parseNullableNumber(row.omr_physics),
    OmrChemistry: parseNullableNumber(row.omr_chemistry),
    OmrMath: parseNullableNumber(row.omr_mathe),
    OmrBiology: parseNullableNumber(row.omr_biology),
    OmrBangla: parseNullableNumber(row.omr_bangla),
    OmrEnglish: parseNullableNumber(row.omr_english),
    OmrTotal: parseNullableNumber(row.omr_total),
    OmrStatus: parseNullableString(row.omr_status),
    Position: parseNullableNumber(row.position),
  };

  return {
    user,
    personalInfo,
    educationalInfo,
    hscSummary,
    hscMarks,
    rawResults,
    omrResult,
  };
};
