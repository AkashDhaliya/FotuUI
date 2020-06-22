import axios from "axios";
import { URL } from "../../Constants/Const";

function Requests(path, params) {
  return axios.get(`${URL}${path}`, { params: params });
}

export default Requests;
