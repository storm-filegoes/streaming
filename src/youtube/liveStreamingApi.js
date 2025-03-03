// src/youtube/liveStreamingApi.js

import axios from 'axios';
import { API_KEY, BASE_URL } from '../../config/config';

const liveStreamingApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
});

export const createLiveStream = async (streamData) => {
    try {
        const response = await liveStreamingApi.post('/liveStreams', streamData);
        return response.data;
    } catch (error) {
        throw new Error(`Error creating live stream: ${error.message}`);
    }
};

export const updateLiveStream = async (streamId, streamData) => {
    try {
        const response = await liveStreamingApi.put(`/liveStreams/${streamId}`, streamData);
        return response.data;
    } catch (error) {
        throw new Error(`Error updating live stream: ${error.message}`);
    }
};

export const getLiveStreamDetails = async (streamId) => {
    try {
        const response = await liveStreamingApi.get(`/liveStreams/${streamId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching live stream details: ${error.message}`);
    }
};