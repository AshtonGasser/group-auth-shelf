import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* addItem(action) {
    try{
        yield axios.post('api/shelf',action.payload);
        yield put({type: "FETCH_ITEM"})
    }catch (error) {
        console.error(`${error} in POST`);
      }
}

export default addItem;