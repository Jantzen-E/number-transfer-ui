import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import UtahNumber from './UtahNumber';

export default function UtahList({ num }) {
    const deleteNum = () => {
        const numRef = firebase.database().ref('NewNum').child();
        numRef.remove();
    }
    const [number, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const createEntry = () => {
        const numRef = firebase.database().ref("NewNum")
        const newNum = {
            number,
            active: false,
        };

        numRef.push(newNum);
    }

    const [numList, setNumList] = useState();

    useEffect(() => {
      const numRef = firebase.database().ref("newNum");
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
        <div className="utah">
            <select>
                <option>Utah</option>
                <option disabled>California</option>
                <option disabled>North Carolina</option>
                <option disabled>Nevada</option>
                <option disabled>Montana</option>
                <option disabled>Idaho</option>
            </select>
            <ol className="numberList">
                <UtahNumber />
            </ol>
            <div>
                <button>View</button>
                <button>Edit</button>
                <button onClick={deleteNum}>Delete</button>
                <button>Copy to other state</button>
            </div>
            <div>
                <input type="text" autoFocus="autoFocus" onChange={handleOnChange} value={number} placeholder="Name"/>
                <input type="text" onChange={handleOnChange} value={number} placeholder="Address"/>
                <input type="text" onChange={handleOnChange} value={number} placeholder="Number"/>
                <button onClick={createEntry}>Add new entry</button>
            </div>
        </div>
    )
}