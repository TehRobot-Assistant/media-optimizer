# Media Optimizer

<p align="center">
  <img src="icon.png" alt="Media Optimizer" width="200">
</p>

<p align="center">
  Analyse your Sonarr and Radarr libraries to identify space hogs, codec upgrade candidates, and export data for review.
</p>

---

## Features

- Connect to Sonarr and Radarr using their API keys
- View total library size, average file sizes, and quality breakdown
- Sort by size, MB/minute, codec, resolution, year, and more
- Identify large files with inefficient codecs (h264 vs HEVC)
- Export data as CSV or JSON
- API keys stay in your browser — never sent to external servers
- Matching themes — Sonarr blue, Radarr orange

## Installation

### Unraid (Recommended)

1. Go to **Apps** tab and search **TehRobot**
2. Click the **Docker Hub** button
3. Find **media-optimizer** and click **Install**
4. Set your port
5. Click **Apply**

### Docker Compose

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

### Docker Run

```bash
docker run -d \
  --name media-optimizer \
  -p 3000:3000 \
  tehrobot/media-optimizer:latest
```

## Usage

1. Open the web interface at `http://your-server:3000`
2. Choose **Sonarr** or **Radarr**
3. Enter your instance URL (e.g., `http://192.168.1.10:8989`)
4. Enter your API key (found in Settings > General)
5. Click **Analyse Library**

Your credentials are stored locally in browser cookies — never sent to any external server.

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port |

## Links

- [Docker Hub](https://hub.docker.com/r/tehrobot/media-optimizer)
- [GitHub](https://github.com/TehRobot-Assistant/media-optimizer)

## Disclaimer

This is an unofficial third-party tool. It is not affiliated with or endorsed by the Sonarr or Radarr projects.

## License

MIT
