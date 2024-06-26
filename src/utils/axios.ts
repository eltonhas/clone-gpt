import axios, { type AxiosInstance } from 'axios'

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000',
})
