import { call, put, takeEvery } from "redux-saga/effects";
import { getNewsSuccess } from "./newsState";
import axios from "axios";

const apiKey = "73f05d004bb047ec897b15d66ebcbddf";
const apiUrl = "https://mocki.io/v1/3caf9af0-cc0f-41d0-bd5f-4900e39cd07c";;

function* workgetNewsFetch() {
  try {
    const response = yield call(() => axios.get(`${apiUrl}?apiKey=${apiKey}`));
    const formattedNewsShortened = response.data.articles.slice(0, 10);
    yield put(getNewsSuccess(formattedNewsShortened));
  } catch (error) {
    console.log(error);
  }
}

function* newsSaga() {
  yield takeEvery("news/getNewsFetch", workgetNewsFetch);
}

export default newsSaga;
