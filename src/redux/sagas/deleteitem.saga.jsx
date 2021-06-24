import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";




function* deleteItem (action) {
    try{
    yield axios.delete(`api/shelf/${action.payload}`)
    yield put({ type: "SET_SHELF", payload: item.data });
}catch{
    console.error("ERROR in ")
}
}

function* deleteItemSaga (){
    yield takeLatest ('DELETE_ITEM', deleteItem)
}

export default deleteItemSaga;