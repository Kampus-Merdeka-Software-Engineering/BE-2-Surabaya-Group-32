const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.login.findUnique({
      where: {
        username: username,
      },
    });

    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }

    res.status(200).send('Login successful');
  } catch (error) {
    next(error);
  }
};
