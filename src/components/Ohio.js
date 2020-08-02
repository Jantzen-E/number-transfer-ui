import React, { useState } from 'react';
import firebase2 from '../util/firebase2';

export default function Ohio() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const createEntry = () => {
        const numRef2 = firebase2.database().ref("NewNum2")
        const newNum2 = {
            title,
            complete: false,
        };

        numRef2.push(newNum2);
    }

    return(
        <div className="ohio">
            <select>
                <option>Ohio</option>
                <option disabled>Nebraska</option>
                <option disabled>Missouri</option>
                <option disabled>Tennessee</option>
                <option disabled>Virginia</option>
                <option disabled>Kentucky</option>
            </select>
            <div className="numbers">
                <p>here is number #1 for ohio</p>
                <p>330-333-3333</p>
                <p>330-444-4444</p>
                <p>330-999-9999</p>
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