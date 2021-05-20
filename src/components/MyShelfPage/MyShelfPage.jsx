import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './MyShelfPage.css';

function MyShelfPage() {

  const dispatch = useDispatch();
  // items grabs state from myItems reducer
  const myItems = useSelector(store => store.myItems);
  const user = useSelector(store => store.user)

  useEffect(() => {
    // on page load, get list of items from the database
    dispatch({ type: 'FETCH_MY_ITEMS' , payload: user.id});
  }, [])

  function deleteItem(id) {
    // console.log('in deleteItem', id);
    dispatch({ type: 'DELETE_ITEM', payload: id });
  }

  return (
    <div className="container">
      <h2>My Shelf</h2>
      <ul>
        {myItems.map(item => {
          return <li key={item.id}>Description: {item.description}
            <img src={item.image_url} className="images" />
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        })}
      </ul>
    </div>
  );
}

export default MyShelfPage;