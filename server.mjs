import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(join(__dirname, 'public')));

// Redirect /sonarr and /radarr to include trailing slash
app.get('/sonarr', (req, res) => res.redirect('/sonarr/'));
app.get('/radarr', (req, res) => res.redirect('/radarr/'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`📊 Media Optimizer running at http://localhost:${PORT}`);
    console.log(`   Sonarr: http://localhost:${PORT}/sonarr/`);
    console.log(`   Radarr: http://localhost:${PORT}/radarr/`);
});
