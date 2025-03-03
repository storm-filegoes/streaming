// This file contains utility functions for API requests.

export const formatResponse = (response) => {
    return {
        status: response.status,
        data: response.data,
    };
};

export const handleError = (error) => {
    console.error('API Error:', error);
    return {
        status: error.response ? error.response.status : 500,
        message: error.message || 'An unknown error occurred',
    };
};