import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af23a77a14ca4231a50326f458413c93",
  },
});
