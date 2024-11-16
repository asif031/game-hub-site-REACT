import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "dac0cb8cf51a4717b67ca36d4e3486c0",
  },
});
