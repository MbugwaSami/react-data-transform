import { Dispatch } from "react";

import { SET_SOURCE_DATA } from "../types";

export const setSourceData = <T>(
  dispatch: Dispatch<Action>,
  data: Array<ViewDataProps<T>>
) => {
  dispatch({ type: SET_SOURCE_DATA, payload: data });
};
