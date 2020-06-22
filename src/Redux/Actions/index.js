import { CLIENT_ID, NO_OF_ITEMS, ORDER_BY } from "../../Constants/Const";
import Requests from "../../Components/RequestComponent/Requests";

export function getImages(param) {
  return function (dispatch) {
    let params = {
      query: param.query,
      page: param.pageNo,
      order_by: ORDER_BY,
      client_id: CLIENT_ID,
      per_page: NO_OF_ITEMS,
    };

    return Requests("/photos", params).then(
      (response) => {
        dispatch({
          type: "DATA_LOADED",
          payload: {
            pageNo: param.pageNo,
            data: param.query === "" ? response.data : response.data.results,
          },
        });
      },
      (error) => {
        dispatch({ type: "ERROR_OCCURRED", payload: error });
      }
    );
  };
}
