import { call, put, takeEvery } from "redux-saga/effects";
import { getNewsSuccess } from "./newsState";
import axios from "axios";

const apiKey = "73f05d004bb047ec897b15d66ebcbddf";

function* workgetNewsFetch(action) {
  try {
    const { limit = 10, currentPage = 5 } = action.payload || {};
    const apiUrl = `https://mocki.io/v1/e9063fe4-37df-418e-8741-16b3f49c25d0?_page=${currentPage}&_limit=${limit}`;
    const response = yield call(() => axios.get(`${apiUrl}&apiKey=${apiKey}`));
    const formattedNewsShortened = response.data.articles.slice(0, 5);
    yield put(getNewsSuccess(formattedNewsShortened));
  } catch (error) {
    console.log(error);
  }
}

function* newsSaga() {
  yield takeEvery("news/getNewsFetch", workgetNewsFetch);
}

export default newsSaga;
