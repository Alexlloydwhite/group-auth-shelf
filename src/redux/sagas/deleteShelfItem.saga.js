import { put } from '@redux-saga/core/effects';
import axios from 'axios';

function* deleteShelfItem(action) {
    try {
        yield axios.delete(`/api/shelf/${action.payload}`);
        yield put({ type: 'FETCH__MY_ITEMS' });
    } catch (error) {
        // alert(`Sorry things aren't working at the moment. Try again later.`);
        console.log('Error deleting item', error);
    }
}

export default deleteShelfItem;