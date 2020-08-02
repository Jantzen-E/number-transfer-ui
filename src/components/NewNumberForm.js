// import React, { useState } from 'react';
// import firebase from '../util/firebase';

// export default function NewNumberForm() {
//     const [title, setTitle] = useState('');

//     const handleOnChange = (e) => {
//         setTitle(e.target.value);
//     };

//     const createEntry = () => {
//         const numRef = firebase.database().ref("NewNum")
//         const newNum = {
//             title,
//             complete: false,
//         };

//         numRef.push(newNum);
//     }

//     return(
//         <div>
//             <input type="text" onChange={handleOnChange} value={title} placeholder="Name"/>
//             <input type="text" onChange={handleOnChange} value={title} placeholder="Address"/>
//             <input type="text" onChange={handleOnChange} value={title} placeholder="Number"/>
//             <button onClick={createEntry}>Add new entry</button>
//         </div>
//     )
// }