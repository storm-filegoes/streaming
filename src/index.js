// // src/index.js

// import express from 'express';
// import { config } from '../config/config';
// import { getVideoDetails, searchVideos, getChannelInfo } from './youtube/dataApi';
// import { createLiveStream, updateLiveStream, getLiveStreamDetails } from './youtube/liveStreamingApi';

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON requests
// app.use(express.json());

// // YouTube Data API routes
// app.get('/api/videos/:id', async (req, res) => {
//     try {
//         const videoDetails = await getVideoDetails(req.params.id);
//         res.json(videoDetails);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/api/search', async (req, res) => {
//     try {
//         const videos = await searchVideos(req.query.q);
//         res.json(videos);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/api/channel/:id', async (req, res) => {
//     try {
//         const channelInfo = await getChannelInfo(req.params.id);
//         res.json(channelInfo);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // YouTube Live Streaming API routes
// app.post('/api/live', async (req, res) => {
//     try {
//         const liveStream = await createLiveStream(req.body);
//         res.json(liveStream);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.put('/api/live/:id', async (req, res) => {
//     try {
//         const updatedStream = await updateLiveStream(req.params.id, req.body);
//         res.json(updatedStream);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.get('/api/live/:id', async (req, res) => {
//     try {
//         const liveStreamDetails = await getLiveStreamDetails(req.params.id);
//         res.json(liveStreamDetails);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });








// src/index.js

import express from 'express';
import { config } from '../config/config';
import { getVideoDetails, searchVideos, getChannelInfo } from './youtube/dataApi';
import { createLiveStream, updateLiveStream, getLiveStreamDetails } from './youtube/liveStreamingApi';
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// YouTube Data API routes
app.get('/api/videos/:id', async (req, res) => {
    try {
        const videoDetails = await getVideoDetails(req.params.id);
        res.json(videoDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/search', async (req, res) => {
    try {
        const videos = await searchVideos(req.query.q);
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/channel/:id', async (req, res) => {
    try {
        const channelInfo = await getChannelInfo(req.params.id);
        res.json(channelInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// YouTube Live Streaming API routes
app.post('/api/live', async (req, res) => {
    try {
        const liveStream = await createLiveStream(req.body);
        res.json(liveStream);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/live/:id', async (req, res) => {
    try {
        const updatedStream = await updateLiveStream(req.params.id, req.body);
        res.json(updatedStream);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/live/:id', async (req, res) => {
    try {
        const liveStreamDetails = await getLiveStreamDetails(req.params.id);
        res.json(liveStreamDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});