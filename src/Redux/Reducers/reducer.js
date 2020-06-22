import {
  DATA_LOADED,
  RESET_DATA,
  ERROR_OCCURRED,
  REQUEST_PROGRESS,
  SEARCH_IMAGE,
  DOWNLOAD_IMG
} from "../../Constants/Const";

let initialState = {
  photosList: [],
  searchQuery: "",
  download:"",
  isFetching: false,
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

    case RESET_DATA:
      return {
        ...state,
        photosList: action.payload,
        page_no:1, 
      };

      case SEARCH_IMAGE:
      return {
        ...state,
        searchQuery: action.payload,
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
