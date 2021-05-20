import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";

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

    return (
        <div style={{textAlign:"center"}}>
            <h2>Add A New Item To The Shelf</h2>
            <form onSubmit={submitForm}>
                <input
                    value={description}
                    placeholder="Item Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    value={imageUrl}
                    placeholder="Item Image Url"
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddItemForm;