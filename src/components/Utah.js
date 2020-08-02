import React, { useState } from 'react';
import firebase from '../util/firebase';

export default function Utah() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const createEntry = () => {
        const numRef = firebase.database().ref("NewNum")
        const newNum = {
            title,
            complete: false,
        };

        numRef.push(newNum);
    }

    return(
        <div className="utah">
            <select>
                <option>Utah</option>
                <option disabled>California</option>
                <option disabled>North Carolina</option>
                <option disabled>Nevada</option>
                <option disabled>Montana</option>
                <option disabled>Idaho</option>
            </select>
            <div className="numbers">
                <p>here is number #1 for utah</p>
                <p>801-555-5555</p>
                <p>801-667-6677</p>
                <p>801-888-8888</p>
            </div>
            <div>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>Copy to other state</button>
            </div>
            <div>
                <input type="text" onChange={handleOnChange} value={title} placeholder="Name"/>
                <input type="text" onChange={handleOnChange} value={title} placeholder="Address"/>
                <input type="text" onChange={handleOnChange} value={title} placeholder="Number"/>
                <button onClick={createEntry}>Add new entry</button>
            </div>
        </div>
    )
}