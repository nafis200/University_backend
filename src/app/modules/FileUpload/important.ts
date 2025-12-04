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




