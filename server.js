require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const supabaseAuth = require('./middleware/supabaseAuth');

// Route imports
const protestRoutes = require('./routes/protestRoutes');
const samuhikRoutes = require('/home/aman-kumar-chhari/Desktop/hackatons /Hacksagon,gwalior/Varta_laab-/backend/'); // ✅ corrected filename spelling
const poochhoRoutes = require('./routes/poochhoRoutes');
const karyaRoutes = require('./routes/karyaRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Auth middleware
app.use(supabaseAuth);

// Routes
app.use('/api/protests', protestRoutes);
app.use('/api/samuhik', samuhikRoutes);
app.use('/api/questions', poochhoRoutes);
app.use('/api/karya', karyaRoutes);
app.use('/api/blogs', blogRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('🚀 Varta Laabh backend is running successfully!');
});

// Catch-all 404 for unknown API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('🔥 Global error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error', detail: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
