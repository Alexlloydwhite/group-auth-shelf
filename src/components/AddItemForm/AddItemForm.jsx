import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import ReactFilestack from 'react-filestack';

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

    const API_KEY = 'AWwk8yYpJQECEWX7Aj6Lwz';
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
                <ReactFilestack
                    apikey={'AWwk8yYpJQECEWX7Aj6Lwz'}
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