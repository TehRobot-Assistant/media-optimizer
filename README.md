# Media Optimizer

Analyze your Sonarr and Radarr libraries to identify space hogs, codec upgrade candidates, and export data for review.

![Screenshot](screenshot.png)

## Features

- **Library Analysis** — View total space usage, average file sizes, and upgrade statistics
- **Smart Sorting** — Sort by size, MB/minute, codec, resolution, year, and more
- **Filter & Search** — Quickly find specific shows or movies
- **Export Data** — Download analysis as CSV or JSON
- **Codec Detection** — Identify files needing HEVC/AV1 upgrades
- **Matching Themes** — Sonarr blue, Radarr orange — feels native

## Quick Start

### Option 1: Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/media-optimizer.git
cd media-optimizer

# Install dependencies
npm install

# Start the server
npm start

# Open http://localhost:3000
```

### Option 2: Docker

```bash
docker run -d -p 3000:3000 --name media-optimizer yourusername/media-optimizer
```

### Option 3: Docker Compose

```yaml
version: '3'
services:
  media-optimizer:
    image: yourusername/media-optimizer
    container_name: media-optimizer
    ports:
      - "3000:3000"
    restart: unless-stopped
```

## Usage

1. Open the web interface
2. Choose Sonarr or Radarr
3. Enter your instance URL (e.g., `http://localhost:8989`)
4. Enter your API key (found in Settings → General)
5. Click "Analyze Library"

Your credentials are stored locally in browser cookies — never sent to any external server.

## Configuration

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `PORT` | `3000` | Server port |

## API Keys

- **Sonarr**: Settings → General → API Key
- **Radarr**: Settings → General → API Key

## Sort Options

### Sonarr
- Size (total)
- Per Episode
- MB/Min
- Episode Count
- Name (A-Z)
- Year
- Upgradable

### Radarr
- Size (total)
- MB/Min
- Runtime
- Name (A-Z)
- Year
- Resolution
- Upgradable

## Export Formats

### CSV
Standard comma-separated values, opens in Excel/Sheets.

### JSON
Structured data for programmatic use or further analysis.

## Requirements

- Node.js 18+ (for self-hosted)
- Sonarr v3+ and/or Radarr v3+
- Network access between this tool and your *arr instances

## Unraid

Template available in Community Applications (coming soon).

Manual install:
1. Add a new Docker container
2. Repository: `yourusername/media-optimizer`
3. Port: `3000`

## FAQ

**Q: Is my API key safe?**
A: Yes. Keys are stored in your browser's cookies and only sent directly to your Sonarr/Radarr instances.

**Q: Why does it take a while to load?**
A: The tool fetches episode/movie file data for each item. Large libraries (1000+ shows) may take a minute.

**Q: What does "Needs Upgrade" mean?**
A: Files not using HEVC/H.265/AV1 codecs, or using less than 10-bit color depth.

## Disclaimer

This is an **unofficial third-party tool**. It is not affiliated with, endorsed by, or connected to the Sonarr or Radarr projects. Sonarr and Radarr logos are trademarks of their respective owners and are used here for identification purposes only.

## License

MIT

## Contributing

Pull requests welcome! Please open an issue first to discuss changes.
