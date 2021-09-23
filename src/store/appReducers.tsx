import sourceData from "./reducers/sourceData";
import previewData from "./reducers/previewData";

const combinedAppState: AppState = {
  sourceData: {
    tablesData: [],
  },
  previewData: {
    tablesData: [],
  },
};

const reducers = {
  sourceData,
  previewData,
};

const combineReducers = (reducers: AppReducers) => {
  return (state: AppState, action: Action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        //@ts-ignore
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const combinedAppReducers = combineReducers(reducers);

export default { combinedAppReducers, combinedAppState };
