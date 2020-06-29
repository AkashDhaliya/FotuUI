import {
  CLIENT_ID,
  NO_OF_ITEMS,
  NO_OF_ITEMS_RANDOM,
  RANDOMURLPATH,
  RANDOM_IMG,
  ORDER_BY,
  REQUEST_PROGRESS,
  DATA_LOADED,
  RESET_DATA,
  ERROR_OCCURRED,
  SEARCH_IMAGE,
  DOWNLOAD_IMG,
} from "../../Constants/Const";

import Requests from "../../Components/RequestComponent/Requests";

export const fetchStatus = () => {
  return {
    type: REQUEST_PROGRESS,
    payload: true,
  };
};

export const  resetData= () => {
  return {
    type: RESET_DATA,
    payload: [],
  };
};

export const downloadImg = (id) => {
  return {
    type: DOWNLOAD_IMG,
    payload: id,
  };
};

export const searchImage = (query) => {
  return {
    type: SEARCH_IMAGE,
    payload: query,
  };
};

export function getImages(param) {
  return function (dispatch) {
    let params = {
      query: param.query,
      page: param.pageNo,
      order_by: ORDER_BY,
      client_id: CLIENT_ID,
      per_page: param.path.includes(RANDOMURLPATH)?NO_OF_ITEMS_RANDOM:NO_OF_ITEMS,
    };
    return Requests(param.path, params).then(
      (response) => {
          dispatch({
            type: param.path.includes(RANDOMURLPATH)?RANDOM_IMG:DATA_LOADED ,
            payload: {
              pageNo: param.pageNo,
              data: param.query === "" ? response.data : response.data.results,
            },
          });
      },
      (error) => {
        dispatch({ type: ERROR_OCCURRED });
      }
    );
  };
}
