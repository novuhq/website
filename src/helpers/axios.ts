// eslint-disable-next-line import/no-extraneous-dependencies
import axiosInstance from 'axios';

export const axios = axiosInstance.create({
  baseURL: process.env.SERVER_URL,
});
