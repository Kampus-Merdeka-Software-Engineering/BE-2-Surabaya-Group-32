const express = require('express');
const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use(errorHandler);

module.exports = app;
