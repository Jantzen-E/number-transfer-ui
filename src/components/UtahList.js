import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import Number from './Number';
import Form from './Form';

export default function UtahList() {

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
                <Number />
            </ol>
            {/* <div className="numbers"> */}
                {/* {numList ? numList.map((number, id) => <Number number={number} key={id}/>) : " "} */}
            {/* </div> */}
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