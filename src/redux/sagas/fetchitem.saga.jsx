import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

 function* fetchItem() {
   console.log('in fetch item');
  //get all items from db
  try {
    const item = yield axios.get("/api/shelf");
    console.log(`In fetchItem generator, item.data ->: ${item.data}`);
    yield put({ type: "SET_SHELF", payload: item.data });
  } catch {
    console.log("ERROR in fetchItem Saga");
  }
}

function* itemFetchSaga() {

  
    yield takeLatest("FETCH_SHELF", fetchItem)
  
}



export default itemFetchSaga