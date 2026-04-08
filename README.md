# Media Optimizer

<p align="center">
  <img src="icon.png" alt="Media Optimizer" width="200">
</p>

<p align="center">
  Analyse your Sonarr and Radarr libraries to identify space hogs, codec upgrade candidates, and export data for review.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#usage">Usage</a> •
  <a href="#unraid">Unraid</a> •
  <a href="#faq">FAQ</a>
</p>

---

## Features

- **Library analysis** — view total space usage, average file sizes, and upgrade statistics
- **Smart sorting** — sort by size, MB/minute, codec, resolution, year, and more
- **Filter and search** — quickly find specific shows or movies
- **Export data** — download analysis as CSV or JSON
- **Codec detection** — identify files needing HEVC/AV1 upgrades
- **Matching themes** — Sonarr blue, Radarr orange — feels native
- **Browser-only credentials** — API keys stay in your browser, never sent to external servers

## Quick Start

### Docker Compose (Recommended)

```yaml
services:
  media-optimizer:
    image: tehrobot/media-optimizer:latest
    container_name: media-optimizer
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
    restart: unless-stopped
```

```bash
docker compose up -d
# Open http://localhost:3000
```

### Docker Run

```bash
docker run -d \
  --name media-optimizer \
  -p 3000:3000 \
  tehrobot/media-optimizer:latest
```

### Run Locally

```bash
git clone https://github.com/TehRobot-Assistant/media-optimizer.git
cd media-optimizer
npm install
npm start
# Open http://localhost:3000
```

## Usage

1. Open the web interface
2. Choose **Sonarr** or **Radarr**
3. Enter your instance URL (e.g., `http://192.168.1.10:8989`)
4. Enter your API key (found in Settings > General)
5. Click **Analyse Library**

Your credentials are stored locally in browser cookies — never sent to any external server.

## Unraid

### Option A: Search Docker Hub

1. Go to **Apps** tab and search **TehRobot**
2. Find **media-optimizer** and click **Install**
3. Set your port
4. Click **Apply**

### Option B: Docker Tab (Manual)

1. Go to **Docker** > **Add Container**
2. Repository: `tehrobot/media-optimizer:latest`
3. Port: `3000` > `3000`
4. Click **Apply**

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port |

## API Keys

- **Sonarr**: Settings > General > API Key
- **Radarr**: Settings > General > API Key

## Sort Options

### Sonarr
- Size (total), Per Episode, MB/Min, Episode Count, Name (A-Z), Year, Upgradable

### Radarr
- Size (total), MB/Min, Runtime, Name (A-Z), Year, Resolution, Upgradable

## Export Formats

- **CSV** — opens in Excel/Sheets
- **JSON** — structured data for programmatic use

## Requirements

- Node.js 18+ (for self-hosted)
- Sonarr v3+ and/or Radarr v3+
- Network access between this tool and your *arr instances

## FAQ

**Q: Is my API key safe?**
A: Yes. Keys are stored in your browser's cookies and only sent directly to your Sonarr/Radarr instances.

**Q: Why does it take a while to load?**
A: The tool fetches episode/movie file data for each item. Large libraries (1000+ shows) may take a minute.

**Q: What does "Needs Upgrade" mean?**
A: Files not using HEVC/H.265/AV1 codecs, or using less than 10-bit colour depth.

## Docker Hub

Available on Docker Hub: [tehrobot/media-optimizer](https://hub.docker.com/r/tehrobot/media-optimizer)

## Disclaimer

This is an **unofficial third-party tool**. It is not affiliated with, endorsed by, or connected to the Sonarr or Radarr projects. Sonarr and Radarr logos are trademarks of their respective owners and are used here for identification purposes only.

## License

MIT
