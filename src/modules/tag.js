import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { createRequestSaga } from '../libs/reducerUtils';
import searchTagAPI from '../libs/api/tag';

// 태그 검색
const SEARCH_TAG = 'tag/SEARCH_TAG';
const SEARCH_TAG_SUCCESS = 'tag/SEARCH_TAG_SUCCESS';
const SEARCH_TAG_FAIL = 'tag/SEARCH_TAG_FAIL';

export const searchTag = createAction(SEARCH_TAG, ({ text }) => ({ text }));

const searchTagSaga = createRequestSaga(SEARCH_TAG, searchTagAPI);

export function* tagSaga() {
  yield takeLatest(SEARCH_TAG, searchTagSaga);
}

const initialState = {
  searchedTags: { data: [] },
  searchedTagsError: false
};
const tag = handleActions(
  {
    [SEARCH_TAG]: state => state,
    [SEARCH_TAG_SUCCESS]: (state, action) => ({
      ...state,
      searchedTags: action.payload
    }),
    [SEARCH_TAG_FAIL]: (state, action) => ({
      ...state,
      searchedTagsError: action.payload
    })
  },
  initialState
);
export default tag;