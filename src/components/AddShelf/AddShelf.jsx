import {useState} from 'react';
import {useDispatch} from 'react-redux';

// function to add item to shelf
function AddShelf() {
    // setup dispatch variable
    const dispatch = useDispatch();
    
    // local state
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    // function to handle submit
    const handleSubmit = () => {
        // see that click fires
        console.log('clicked!')

        // variable to hold new item sent to server
        const newItem = {
            image_url: image,
            description: description
        }

        // dispatch item to saga
        dispatch({type: 'ADD_ITEM', payload: newItem});

    } // end handleSubmit
    
    return (
        <>
            <h1>Items Shelf</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" Placeholder="Image" onChange={(event) => setImage(event.target.value)}></input>
                <input type="text" Placeholder="Description" onChange={(event) => setDescription(event.target.value)}></input>
                <button type="submit">Submit</button>
            </form>

        </>
    )
} // end AddShelf

// export AddShelf
export default AddShelf;