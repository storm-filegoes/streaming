# YouTube API Application

This project is a Node.js application that interacts with the YouTube Data API and Live Streaming API. It provides functionalities to fetch video details, search for videos, manage live streams, and handle API requests efficiently.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Functions](#api-functions)
  - [YouTube Data API](#youtube-data-api)
  - [YouTube Live Streaming API](#youtube-live-streaming-api)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/youtube-api-app.git
   ```

2. Navigate to the project directory:
   ```
   cd youtube-api-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
node src/index.js
```

## API Functions

### YouTube Data API

- `getVideoDetails(videoId)`: Fetches details of a specific video.
- `searchVideos(query)`: Searches for videos based on a query.
- `getChannelInfo(channelId)`: Retrieves information about a specific channel.

### YouTube Live Streaming API

- `createLiveStream(streamDetails)`: Creates a new live stream.
- `updateLiveStream(streamId, updatedDetails)`: Updates an existing live stream.
- `getLiveStreamDetails(streamId)`: Retrieves details of a specific live stream.

## Configuration

The configuration settings, including API keys and base URLs, can be found in the `config/config.js` file. Make sure to update it with your own API credentials.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.