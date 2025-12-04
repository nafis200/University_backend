import fs from 'fs/promises';


type TableData = Record<string, Record<string, any>[]>;


const parseSQLFile = async (filePath: string): Promise<TableData> => {
  const fileContent = await fs.readFile(filePath, 'utf16le');

  const data: TableData = {};
  const sqlText = fileContent.replace(/\r?\n|\r/g, ' '); // remove line breaks for easier regex
  const insertRegex =
    /INSERT\s+\[dbo\]\.\[([^\]]+)\]\s*\(([\s\S]+?)\)\s*VALUES\s*\(([\s\S]+?)\)/gi;

  const matches = sqlText.matchAll(insertRegex);

  for (const match of matches) {
    const tableName = match[1]!.trim();
    const columns = match[2]!
      .split(',')
      .map((c) => c.trim().replace(/[\[\]`]/g, ''));

    const values = match[3]!
      .split(/,(?=(?:[^']*'[^']*')*[^']*$)/) 
      .map((v) => {
        v = v.trim();
        if (v.toUpperCase() === 'NULL') return null;
        if (v.startsWith("N'") && v.endsWith("'")) return v.slice(2, -1);
        if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1);
        return v;
      });

    const row: Record<string, any> = {};
    columns.forEach((col, i) => (row[col] = values[i] ?? null));

    if (!data[tableName]) data[tableName] = [];
    data[tableName].push(row);
  }

  return data
};

const uploadFile = async (file: Express.Multer.File) => {
  if (!file) throw new Error('No file provided');

  try {
    const tableData = await parseSQLFile(file.path);
   

    await fs.unlink(file.path);
    console.log('File deleted successfully');

    return {
      message: 'SQL file processed successfully',
      data: tableData,
    };
  } catch (error) {
    console.error('Error processing file:', error);
    await fs.unlink(file.path).catch(() => console.log('Failed to delete file'));
    throw error;
  }
};

export const FileService = {
  uploadFile,
};





// const {
//   applicant_id,
//   name,
//   fname,
//   mname,
//   dob,
//   gender,
//   hsc_exam_name,
//   hsc_board,
//   hsc_regi,
//   hsc_session,
//   hsc_roll,
//   hsc_pass_year,
//   hsc_study_group,
//   hsc_study_type,
//   hsc_gpa,
//   hsc_tot_obt,
//   hsc_full,
//   hsc_conv_1000,
//   hsc_ltrgd,
//   hsc_marks,
//   hsc_bangla_lg,
//   hsc_bangla_gp,
//   hsc_bangla_marks,
//   hsc_english_lg,
//   hsc_english_gp,
//   hsc_english_marks,
//   hsc_physics_lg,
//   hsc_physics_gp,
//   hsc_physics_marks,
//   hsc_chemistry_lg,
//   hsc_chemistry_gp,
//   hsc_chemistry_marks,
//   hsc_mathe_lg,
//   hsc_mathe_gp,
//   hsc_mathe_marks,
//   hsc_biology_lg,
//   hsc_biology_gp,
//   hsc_biology_marks,
//   ssc_board,
//   ssc_regi,
//   ssc_session,
//   ssc_roll,
//   ssc_pass_year,
//   ssc_study_group,
//   ssc_study_type,
//   ssc_ltrgrd,
//   ssc_gpa,
//   total_gpa,
//   unit,
//   admission_roll,
//   omr_physics,
//   omr_chemistry,
//   omr_mathe,
//   omr_biology,
//   omr_bangla,
//   omr_english,
//   omr_total,
//   omr_status,
//   position
// } = yourData;





