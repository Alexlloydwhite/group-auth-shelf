import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import PickerDropPane from 'react-filestack';

const AddItemForm = () => {
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Clicked Submit Form');
        dispatch({ type: 'POST_ITEM', description: description, image_url: imageUrl });
        history.push('/shelf');
    }

    const API_KEY = process.env.REACT_APP_API_KEY;
    console.log('API KEY IS:', API_KEY);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Add A New Item To The Shelf</h2>
            <form onSubmit={submitForm}>
                <input
                    value={description}
                    placeholder="Item Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <PickerDropPane
                    apikey={API_KEY}
                    mode = { 'pick' }
                    onSuccess={(response => console.log(response))}
                    onError={(err) => console.log(err)}
                    buttonText={'Upload Image'}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div >
    );
}

export default AddItemForm;