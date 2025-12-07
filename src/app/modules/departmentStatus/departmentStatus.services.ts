import prisma from "../../../shared/prisma";


export const DeparmtentStatusServices = {
  create: async (data: any) => {
    return await prisma.othersInfo.create({ data });
  },

  getAll: async () => {
    const currentYear = new Date().getFullYear();
    const departmentOptions = [
      { value: "Computer Science and Engineering", unit: "A" },
      { value: "Industrial and Production Engineering", unit: "A" },
      { value: "Petroleum and Mining Engineering", unit: "A" },
      { value: "Chemical Engineering", unit: "A" },
      { value: "Electrical and Electronic Engineering", unit: "A" },
      { value: "Biomedical Engineering", unit: "A" },
      { value: "Textile Engineering", unit: "A" },
      { value: "Microbiology", unit: "A" },
      { value: "Fisheries and Marine Bioscience", unit: "A" },
      { value: "Genetic Engineering and Biotechnology", unit: "A" },
      { value: "Pharmacy", unit: "A" },
      { value: "Biochemistry and Molecular Biology", unit: "A" },
      { value: "Environmental Science and Technology", unit: "A" },
      { value: "Nutrition and Food Technology", unit: "A" },
      { value: "Food Engineering (Former Agro Product Processing Technology)", unit: "A" },
      { value: "Climate and Disaster Management", unit: "A" },
      { value: "Physical Education and Sports Science", unit: "A" },
      { value: "Physiotherapy and Rehabilitation", unit: "A" },
      { value: "Nursing and Health Science", unit: "A" },
      { value: "English", unit: "C" },
      { value: "Physics", unit: "A" },
      { value: "Chemistry", unit: "A" },
      { value: "Mathematics", unit: "A" },
      { value: "Applied Statistics and Data Science", unit: "A" },
      { value: "Accounting and Information Systems", unit: "B" },
      { value: "Management", unit: "B" },
      { value: "Finance and Banking", unit: "B" },
      { value: "Marketing", unit: "B" },
      { value: "Medicine, Surgery and Theriogenology", unit: "A" },
      { value: "Microbiology and Hygiene", unit: "A" },
      { value: "Anatomy and Histology", unit: "A" },
      { value: "Pharmacology", unit: "A" },
      { value: "Physiology and Biochemistry", unit: "A" },
      { value: "Animal Breeding and Genetics", unit: "A" },
      { value: "Dairy and Poultry Science", unit: "A" },
      { value: "Pathology and Parasitology", unit: "A" },
      { value: "Animal Science and Nutrition", unit: "A" },
      { value: "Agricultural Economics", unit: "A" },
    ];

    const result = [];
    for (const dept of departmentOptions) {
      let year = currentYear;
      let count = 0;

      while (year > 2000 && count === 0) {
        count = await prisma.othersInfo.count({
          where: {
            Department: {
              equals: dept.value,
              mode: "insensitive"  // <-- makes it case-insensitive
            },
            createdAt: {
              gte: new Date(`${year}-01-01T00:00:00.000Z`),
              lt: new Date(`${year + 1}-01-01T00:00:00.000Z`),
            },
          },
        });

        if (count === 0) year--;
      }

      result.push({
        department: dept.value,
        year,
        studentCount: count,
      });
    }

    return result;
  },
};
