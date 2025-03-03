import axios from 'axios';
import { API_KEY, BASE_URL } from '../../config/config';

const getVideoDetails = async (videoId) => {
    try {
        const response = await axios.get(`${BASE_URL}/videos`, {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: videoId,
                key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching video details: ' + error.message);
    }
};

const searchVideos = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error searching videos: ' + error.message);
    }
};

const getChannelInfo = async (channelId) => {
    try {
        const response = await axios.get(`${BASE_URL}/channels`, {
            params: {
                part: 'snippet,contentDetails,statistics',
                id: channelId,
                key: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching channel info: ' + error.message);
    }
};

export { getVideoDetails, searchVideos, getChannelInfo };