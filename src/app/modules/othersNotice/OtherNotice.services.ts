import prisma from "../../../shared/prisma";


export const OthersAnnouncementServices = {
  async create(payload: { title: string; date: string }) {
    return prisma.othersAnnouncement.create({
      data: {
        title: payload.title,
        date: new Date(payload.date),
      },
    });
  },

  async getAll() {
    return prisma.othersAnnouncement.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async delete(id: string) {
    return prisma.othersAnnouncement.delete({
      where: { id },
    });
  },
};
