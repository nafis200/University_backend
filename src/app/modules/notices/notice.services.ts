import prisma from "../../../shared/prisma";


export const ExamServices = {

  createExamApplication: async (data: { applyStartDate: Date; applyEndDate: Date }) => {
    return await prisma.examApplication.create({ data });
  },

  getAllExamApplications: async () => {
    return await prisma.examApplication.findMany({ orderBy: { createdAt: "desc" } });
  },

  deleteExamApplication: async (id: string) => {
    return await prisma.examApplication.delete({ where: { id } });
  },

 
  createExamAnnouncement: async (data: { title: string; unit: string; examDate: Date }) => {
    return await prisma.examAnnouncement.create({ data });
  },

  getAllExamAnnouncements: async () => {
    return await prisma.examAnnouncement.findMany({ orderBy: { createdAt: "desc" } });
  },

  deleteExamAnnouncement: async (id: string) => {
    return await prisma.examAnnouncement.delete({ where: { id } });
  },
};
