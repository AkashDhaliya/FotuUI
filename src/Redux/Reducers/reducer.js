import {
  DATA_LOADED,
  RESET_DATA,
  ERROR_OCCURRED,
  REQUEST_PROGRESS,
  SEARCH_IMAGE,
  RANDOM_IMG,
  DOWNLOAD_IMG,
} from "../../Constants/Const";

let initialState = {
  photosList: [],
  search: "",
  download: "",
  isFetching: false,
  randomImg: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADED:
      let imgs = state.photosList
        .concat(action.payload.data)
        .filter(function (item, index, data) {
          let dataIndex = data.findIndex((ind) => ind.id === item.id);
          return dataIndex === index;
        });
      return {
        ...state,
        photosList: imgs,
        page_no: action.payload.pageNo,
        isFetching: false,
      };

    case RANDOM_IMG:
      return {
        ...state,
        photosList: [action.payload.data],
        isFetching: false,
      };

    case RESET_DATA:
      return {
        ...state,
        photosList: action.payload,
        page_no: 1,
        search: "",
      };

    case SEARCH_IMAGE:
      return {
        ...state,
        search: action.payload,
      };

    case DOWNLOAD_IMG:
      return {
        ...state,
        download: action.payload,
      };

    case REQUEST_PROGRESS:
      return {
        ...state,
        isFetching: action.payload,
      };

    case ERROR_OCCURRED:
      return {
        ...state,
        error_details: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
