const axios = require("axios");
const axiosInstance = axios.create({
  baseURL: 'https://jservice.io/api/'
});

module.exports = {
  getCategory: async function(id, cb) {
    const {data} = await axiosInstance.get(`category?id=${id}`);
    cb(data.title);
  },
  getRandomQuestion: async function(cb) {
    const {data} = await axiosInstance.get("/random");
    cb(data[0].question);
  }
};