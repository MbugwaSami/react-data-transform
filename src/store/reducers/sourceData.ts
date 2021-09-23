import { SET_SOURCE_DATA } from "../types";

const sourceReducer = (state: SourceDataReducer, action: Action) => {
  const { type } = action;
  switch (type) {
    case SET_SOURCE_DATA: {
      return {
        ...state,
        sourceData: {
          tablesData: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default sourceReducer;
