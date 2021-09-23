import { Dispatch } from "react";

import { SET_PREVIEW_DATA } from "../types";

export const setPreviewData = <T>(
  dispatch: Dispatch<Action>,
  data: Array<ViewDataProps<T>>
) => {
  dispatch({ type: SET_PREVIEW_DATA, payload: data });
};
