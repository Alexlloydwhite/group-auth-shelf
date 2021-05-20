import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* fetchMyShelfItems( action ) {
    try {
        const myItems = yield axios.get(`/api/shelf/${action.payload}`);
        console.log('get all', myItems.data);
        yield put({ type: 'SET_MY_ITEMS', payload: myItems.data });
    } catch (error) {
        console.log('get myItems error', error);
    }
}

export default fetchMyShelfItems;