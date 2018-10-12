"use strict";
import { combineReducers } from "redux";
import drawer from "reducers/drawer";
import images from "reducers/images";
import checked from "reducers/checked";
import notebook from "reducers/notebook";
import label from "reducers/label";
import labelSet from "reducers/labelSet";
import version from "reducers/version";
export default combineReducers({
  drawer,
  images,
  checked,
  notebook,
  label,
	labelSet,
	version
});
