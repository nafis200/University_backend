export declare const splitExcelRow: (row: any) => {
    user: {
        gstApplicationId: string;
        password: string;
        unit: string;
        faculty: null;
        status: "ACTIVE";
        role: "STUDENTS";
    };
    personalInfo: {
        gstApplicationId: string;
        Name: string | null;
        Father: string | null;
        Mother: string | null;
        Dob: string | null;
        Gender: string | null;
    };
    educationalInfo: {
        gstApplicationId: string;
        SSCBoard: string | null;
        SSCYear: string | null;
        SSCRoll: string | null;
        SSCGpa: string | null;
        HSCBoard: string | null;
        HSCYear: string | null;
        HSCRoll: string | null;
        HSCGpa: string | null;
        HSCSubject: string | null;
        SSCSubject: string | null;
    };
    hscSummary: {
        gstApplicationId: string;
        HscExamName: string | null;
        HscStudyGroup: string | null;
        HscStudyType: string | null;
        HscTotalObtained: number | null;
        HscFullMarks: number | null;
        HscConverted1000: number | null;
    };
    hscMarks: {
        gstApplicationId: string;
        BanglaLG: string | null;
        BanglaGP: number | null;
        BanglaMarks: number | null;
        EnglishLG: string | null;
        EnglishGP: number | null;
        EnglishMarks: number | null;
        PhysicsLG: string | null;
        PhysicsGP: number | null;
        PhysicsMarks: number | null;
        ChemistryLG: string | null;
        ChemistryGP: number | null;
        ChemistryMarks: number | null;
        MathLG: string | null;
        MathGP: number | null;
        MathMarks: number | null;
        BiologyLG: string | null;
        BiologyGP: number | null;
        BiologyMarks: number | null;
    };
    rawResults: {
        gstApplicationId: string;
        HscMarksRaw: string | null;
        HscLetterGradeRaw: string | null;
        SscLetterGradeRaw: string | null;
    };
    omrResult: {
        gstApplicationId: string;
        OmrPhysics: number | null;
        OmrChemistry: number | null;
        OmrMath: number | null;
        OmrBiology: number | null;
        OmrBangla: number | null;
        OmrEnglish: number | null;
        OmrTotal: number | null;
        OmrStatus: string | null;
        Position: number | null;
    };
};
//# sourceMappingURL=excelDataParse.d.ts.map