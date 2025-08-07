import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'

const app = express();
const PORT = process.env.PORT || 8000;


// Get filepath from URL of current module
const __filename = fileURLToPath(import.meta.url);
// Get directory name from the filepath
const __dirname = dirname(__filename);

// Serves HTML file  from ./public/ directory
// Tells express to serve all file from public folder as static files/assets
// Any requests for the css files  will be resolved to the public directory
app.use(express.static(path.join(__dirname, '../public')))

// enable JSON capabilities
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at localhost:${PORT}`)
});
