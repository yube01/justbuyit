import axios from "axios";

export const makeRequest = axios.create({
    baseURL: process.env.BACKEND_TOKEN,
    headers:{
        Authorization: "bearer" + process.env.STRAPI_TOKEN
      }
})