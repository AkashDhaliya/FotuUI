import axios from "axios";
const URL = "https://api.unsplash.com";

function Requests(path, params) {
  return axios.get(URL+path, { params: params });
}

export default Requests;
