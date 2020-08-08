import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import OhioNumber from './OhioNumber';

export default function OhioList() {
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

    const [numList, setNumList] = useState();

    useEffect(() => {
      const numRef = firebase.database().ref("newNum2");
      numRef.on("value", (snapshot) => {
        const nums = snapshot.val();
        const numList = []
        for(let id in nums) {
          numList.push({ id, ...nums[id] });
        }
        setNumList(numList);
      });
    },[]);

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
                <OhioNumber />
            </ol>
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