import React, { Component } from 'react'
import { ProfileNavBar, Profile} from "./ui-components";
import {useParams } from "react-router-dom";
import "./App.css";


function ProfileR() {
  return <Put />;
}

  function Put() {
    const { cid } = useParams();
    console.log("found " +(cid));
    return (
      <div><header className="App-header">
        <ProfileNavBar/>
        <Profile idProp= {cid}/>
        </header></div>
      );
    }

export default ProfileR
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { NoteNavBar2, UIEditNote } from './ui-components';
// import { generateClient } from 'aws-amplify/api';
// import './App.css';
// import { getPref } from './graphql/queries';

// const client = generateClient();

// function EditNote() {
//   const { cid } = useParams();
//   const [pref, setPref] = useState({});

//   useEffect(() => {
//     const fetchPref = async () => {
//       try {
//         const response = await client.graphql({
//           query: getPref.replaceAll('__typename', ''),
//           variables: { id: cid },
//         });
//         const record = response?.data?.getPref || {};
//         setPref(record);
//       } catch (error) {
//         console.error('Error fetching pref:', error);
//       }
//     };

//     // Fetch and set the initial state only on component mount
//     if (cid) {
//       fetchPref();
//     }
//   }, [cid]);

//   return (
//     <div>
//       <header className="App-header">
//         <NoteNavBar2 />
//         <UIEditNote pref={pref} />
//       </header>
//     </div>
//   );
// }

// export default EditNote;

// // import React, {useState, useEffect } from 'react';
// // import { useParams } from "react-router-dom";
// // import { NoteNavBar2, UIEditNote } from "./ui-components";
// // import { generateClient } from "aws-amplify/api";
// // import "./App.css";
// // import { getPref } from "./graphql/queries";
// // function EditNote() {
// //   return <Put />;
// // }
// // const client = generateClient();

// // function Put() {
// //   const { cid } = useParams();
// //   const [cr, setMe] = useState({});
// // useEffect(() => {
// //     const queryData = async () => {
// //       const record = cid
// //         ? (
// //             await client.graphql({
// //               query: getPref.replaceAll("__typename", ""),
// //               variables: { id: cid },
// //             })
// //           )?.data?.getPref
// //         : cr;
// //         setMe(record);
// //     };
// //     queryData();
// //   }, [cid, cr]);



// //   return (
// //     <div>
// //       <header className="App-header">
// //         <NoteNavBar2 />
// //         <UIEditNote pref={cr} />
// //       </header>
// //     </div>
// //   );
// // }

// // export default EditNote;