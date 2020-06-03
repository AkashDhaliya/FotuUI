import axios from "axios";
const key = "&client_id=a2WcvdBJ0Puu78DOVsuF3ZDnYGr404up7B_r9xZxrxA"
function Requests(endpoint,params) {
  return axios.get(endpoint+params+key);
}

export default Requests;
