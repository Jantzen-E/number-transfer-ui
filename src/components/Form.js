// import React, { useState, useEffect } from 'react';
// import firebase from '../util/firebase';

// export default function Form() {
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

//     const [numList, setNumList] = useState();

//     useEffect(() => {
//       const numRef = firebase.database().ref("newNum");
//       numRef.on("value", (snapshot) => {
//         const nums = snapshot.val();
//         const numList = []
//         for(let id in nums) {
//           numList.push({ id, ...nums[id] });
//         }
//         setNumList(numList);
//       });
//     },[]);

//     return(
//         <div>
//             <input type="text" onChange={handleOnChange} value={title} placeholder="Name"/>
//             <input type="text" onChange={handleOnChange} value={title} placeholder="Address"/>
//             <input type="text" onChange={handleOnChange} value={title} placeholder="Number"/>
//             <button onClick={createEntry}>Add new entry</button>
//         </div>
//     )
// }