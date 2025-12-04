import { UserRole, UserStatus } from "@prisma/client";

export const splitExcelRow = (row: any) => {
  const gstApplicationId = String(row.applicant_id);
  const password = String(row.hsc_roll); 

  const user = {
  gstApplicationId: gstApplicationId,
  password: password,
  unit: row.unit ?? "A",
  faculty: null,
  status: UserStatus.ACTIVE,
  role: UserRole.STUDENTS,
};

  const personalInfo = {
    gstApplicationId,
    Name: row.name ?? null,
    Father: row.fname ?? null,
    Mother: row.mname ?? null,
    Dob: row.dob ?? null,
    Gender: row.gender ?? null,
  };

  const educationalInfo = {
    gstApplicationId,
    SSCBoard: row.ssc_board ?? null,
    SSCYear: String(row.ssc_pass_year ?? ""),
    SSCRoll: String(row.ssc_roll ?? ""),
    SSCGpa: String(row.ssc_gpa ?? ""),
    HSCBoard: row.hsc_board ?? null,
    HSCYear: String(row.hsc_pass_year ?? ""),
    HSCRoll: String(row.hsc_roll ?? ""),
    HSCGpa: String(row.hsc_gpa ?? ""),
  };


  const hscSummary = {
    gstApplicationId,
    HscExamName: row.hsc_exam_name ?? null,
    HscStudyGroup: row.hsc_study_group ?? null,
    HscStudyType: row.hsc_study_type ?? null,
    HscTotalObtained: row.hsc_tot_obt ?? null,
    HscFullMarks: row.hsc_full ?? null,
    HscConverted1000: row.hsc_conv_1000 ?? null,
  };

  
  const hscMarks = {
    gstApplicationId,
    BanglaLG: row.hsc_bangla_lg ?? null,
    BanglaGP: row.hsc_bangla_gp ?? null,
    BanglaMarks: row.hsc_bangla_marks ?? null,

    EnglishLG: row.hsc_english_lg ?? null,
    EnglishGP: row.hsc_english_gp ?? null,
    EnglishMarks: row.hsc_english_marks ?? null,

    PhysicsLG: row.hsc_physics_lg ?? null,
    PhysicsGP: row.hsc_physics_gp ?? null,
    PhysicsMarks: row.hsc_physics_marks ?? null,

    ChemistryLG: row.hsc_chemistry_lg ?? null,
    ChemistryGP: row.hsc_chemistry_gp ?? null,
    ChemistryMarks: row.hsc_chemistry_marks ?? null,

    MathLG: row.hsc_mathe_lg ?? null,
    MathGP: row.hsc_mathe_gp ?? null,
    MathMarks: row.hsc_mathe_marks ?? null,

    BiologyLG: row.hsc_biology_lg ?? null,
    BiologyGP: row.hsc_biology_gp ?? null,
    BiologyMarks: row.hsc_biology_marks ?? null,
  };


  const rawResults = {
    gstApplicationId,
    HscMarksRaw: row.hsc_marks ?? null,
    HscLetterGradeRaw: row.hsc_ltrgd ?? null,
    SscLetterGradeRaw: row.ssc_ltrgrd ?? null,
  };


  const omrResult = {
    gstApplicationId,
    OmrPhysics: row.omr_physics ?? null,
    OmrChemistry: row.omr_chemistry ?? null,
    OmrMath: row.omr_mathe ?? null,
    OmrBiology: row.omr_biology ?? null,
    OmrBangla: row.omr_bangla ?? null,
    OmrEnglish: row.omr_english ?? null,
    OmrTotal: row.omr_total ?? null,
    OmrStatus: row.omr_status ?? null,
    Position: row.position ?? null,
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
