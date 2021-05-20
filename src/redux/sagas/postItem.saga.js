import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* postItem(action) {
    try {
        yield axios.post('/api/shelf', {description: action.description, image_url: action.image_url});
    } catch (error) {
        console.log('Error adding movie', error);
    }
}

function* postSaga() {
    yield takeEvery('POST_ITEM', postItem);
}

export default postSaga;