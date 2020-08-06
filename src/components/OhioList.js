import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import Number from './Number';
import Form from './Form';

export default function Ohio() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const createEntry = () => {
        const numRef2 = firebase.database().ref("NewNum2")
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
            <ol className="numberList">
                <Number />
            </ol>
            <div>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>Copy to other state</button>
            </div>
            <Form />
        </div>
    )
}