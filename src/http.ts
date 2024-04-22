// http.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Configuration for the Axios instance
const API = axios.create({
  baseURL: 'https://api.yourdomain.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Adding a request interceptor to include token before each request
API.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handling responses
const handleResponse = <T = any>(response: AxiosResponse<T>) => response.data;

// Handling errors
const handleError = (error: any) => {
  // Error handling logic (can be customized)
  return Promise.reject(error.response || error.message || "Unknown error");
};

// API Methods
const get = <T = any>(url: string, config?: AxiosRequestConfig) =>
  API.get<T>(url, config).then(handleResponse).catch(handleError);

const post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
  API.post<T>(url, data, config).then(handleResponse).catch(handleError);

const put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
  API.put<T>(url, data, config).then(handleResponse).catch(handleError);

const del = <T = any>(url: string, config?: AxiosRequestConfig) =>
  API.delete<T>(url, config).then(handleResponse).catch(handleError);

// File upload function
const uploadFile = (url: string, file: File, config?: AxiosRequestConfig) => {
  const formData = new FormData();
  formData.append('file', file);

  const headers = { 'Content-Type': 'multipart/form-data', ...config?.headers };
  return API.post(url, formData, { ...config, headers }).then(handleResponse).catch(handleError);
};

// File download function
const downloadFile = (url: string, responseType: 'blob' | 'arraybuffer' = 'blob') => {
  return API.get(url, { responseType }).then((response) => {
    // Here you might handle the blob data for downloading depending on content-type
    return response.data;
  }).catch(handleError);
};

export { get, post, put, del, uploadFile, downloadFile };
