import { CHANGE_MODE } from "../types/mode";
import { updateObjectsDistanceASync } from "./shared";
import {showLoading,hideLoading} from '../actions/loading';


const changeModeSync = (newMode) => ({
    type:CHANGE_MODE,
    mode:newMode
});


export const changeModeASync = (newMode) => (dispatch) => {
    dispatch(showLoading());

    dispatch(changeModeSync(newMode));
    dispatch(updateObjectsDistanceASync());

    dispatch(hideLoading());
}
