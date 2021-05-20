import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './ShelfPage.css';

function ShelfPage() {

  const dispatch = useDispatch();
  // items grabs state from items reducer
  const items = useSelector(store => store.itemsReducer);

  useEffect(() => {
    // on page load, get list of items from the database
    dispatch({ type: 'FETCH_ITEMS' });
  }, [])

  function deleteItem(id) {
    // console.log('in deleteItem', id);
    dispatch({ type: 'DELETE_ITEM', payload: id });
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {items.map(item => {
          return <li key={item.id}>Description: {item.description}
            <img src={item.image_url} className="images" />
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
