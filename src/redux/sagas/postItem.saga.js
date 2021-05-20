import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postItem() {
    try {
        yield axios.post('/api/shelf', action.payload);
    } catch (error) {
        // alert(`Sorry things aren't working at the moment. Try again later.`);
        console.log('Error adding movie', error);
    }
}

function* postSaga() {
    yield takeEvery('POST_ITEM', postItem);
}

export default postSaga;