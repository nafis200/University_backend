export declare const splitExcelRow: (row: any) => {
    user: {
        gstApplicationId: string;
        password: string;
        unit: any;
        faculty: null;
        status: "ACTIVE";
        role: "STUDENTS";
    };
    personalInfo: {
        gstApplicationId: string;
        Name: any;
        Father: any;
        Mother: any;
        Dob: any;
        Gender: any;
    };
    educationalInfo: {
        gstApplicationId: string;
        SSCBoard: any;
        SSCYear: string;
        SSCRoll: string;
        SSCGpa: string;
        HSCBoard: any;
        HSCYear: string;
        HSCRoll: string;
        HSCGpa: string;
    };
    hscSummary: {
        gstApplicationId: string;
        HscExamName: any;
        HscStudyGroup: any;
        HscStudyType: any;
        HscTotalObtained: any;
        HscFullMarks: any;
        HscConverted1000: any;
    };
    hscMarks: {
        gstApplicationId: string;
        BanglaLG: any;
        BanglaGP: any;
        BanglaMarks: any;
        EnglishLG: any;
        EnglishGP: any;
        EnglishMarks: any;
        PhysicsLG: any;
        PhysicsGP: any;
        PhysicsMarks: any;
        ChemistryLG: any;
        ChemistryGP: any;
        ChemistryMarks: any;
        MathLG: any;
        MathGP: any;
        MathMarks: any;
        BiologyLG: any;
        BiologyGP: any;
        BiologyMarks: any;
    };
    rawResults: {
        gstApplicationId: string;
        HscMarksRaw: any;
        HscLetterGradeRaw: any;
        SscLetterGradeRaw: any;
    };
    omrResult: {
        gstApplicationId: string;
        OmrPhysics: any;
        OmrChemistry: any;
        OmrMath: any;
        OmrBiology: any;
        OmrBangla: any;
        OmrEnglish: any;
        OmrTotal: any;
        OmrStatus: any;
        Position: any;
    };
};
//# sourceMappingURL=excelDataParse.d.ts.map