import { call, put, takeEvery } from "redux-saga/effects";
import { getNewsSuccess } from "./newsState";
import axios from "axios";

function* workgetNewsFetch(payload) {
  try {
    const { perPage = 5 } = payload;
    const apiUrl = `https://mocki.io/v1/0e45cb1c-e75a-4dca-8a28-5815671a61ab?country=id`;
    const response = yield call(() => axios.get(apiUrl));
    const totalPage = Math.ceil(response.data.articles.length / perPage);
    const news = [];
    for (let index = 0; index < totalPage; index++) {
      const content = response.data.articles.slice(
        index * perPage,
        (index + 1) * perPage
      );
      news.push(content);
    }
    yield put(getNewsSuccess(news));
  } catch (error) {
    console.log(error);
  }
}

function* newsSaga() {
  yield takeEvery("news/getNewsFetch", workgetNewsFetch);
}

export default newsSaga;
