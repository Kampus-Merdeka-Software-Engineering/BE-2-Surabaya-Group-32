const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllNews = async (req, res, next) => {
  try {
    const newsItems = await prisma.berita.findMany();
    res.status(200).json(newsItems);
  } catch (error) {
    next(error);
  }
};
