import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "709fe62502df44f4b0317e9a87111e64",
  },
});
