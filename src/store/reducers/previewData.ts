import { SET_PREVIEW_DATA } from "../types";

const previewReducer = (state: PreviewDataReducer, action: Action) => {
  const { type } = action;
  switch (type) {
    case SET_PREVIEW_DATA: {
      return {
        ...state,
        previewData: {
          tablesData: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default previewReducer;
