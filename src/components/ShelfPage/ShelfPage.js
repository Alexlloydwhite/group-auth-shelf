import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {

  const dispatch = useDispatch();
  // items grabs state from items reducer
  const items = useSelector(store => store.itemsReducer);

  useEffect(() => {
    // on page load, get list of items from the database
    dispatch({ type: 'FETCH_ITEMS' });
  }, [])

  return (
    <div className="container">
      <h2>Shelf</h2>
      {JSON.stringify(items)}
      <ul>
        {items.map(item => {
          return <li key={item.id}>Description: {item.description} Image: {item.image_url}</li>
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
