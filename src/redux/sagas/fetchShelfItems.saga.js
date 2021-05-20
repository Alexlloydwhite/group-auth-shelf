import { put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchShelfItems() {
    try {
        const items = yield axios.get('/api/shelf');
        console.log('get all', items.data);
        yield put({ type: 'SET_ITEMS', payload: items.data });
    } catch {
        console.log('get items error');
    }
}

export default fetchShelfItems;