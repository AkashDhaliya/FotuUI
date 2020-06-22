import { DATA_LOADED, ERROR_OCCURRED } from "../../Constants/Const";

const rootReducer = (state = { photosList: [] }, action) => {
  switch (action.type) {
    case DATA_LOADED:
      let existindData = state.photosList;
      existindData = existindData.concat(action.payload.data);
      let uniqImgs = existindData.filter(function (item, index, data) {
        let dataIndex = data.findIndex((ind) => ind.id === item.id);
        return dataIndex === index;
      });
      return {
        ...state,
        photosList: uniqImgs,
        page_no: action.payload.pageNo,
      };

    case ERROR_OCCURRED:
      return state;

    default:
      return state;
  }
};

export default rootReducer;
