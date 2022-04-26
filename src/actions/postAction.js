import {FETCH_BUTTON_CLICKED} from './types';
import {SELECT_POST} from './types';

import axios from 'axios';

//https://jsonplaceholder.typicode.com/posts?_limit=5

// export const fetchPosts = () => {
//     return {
//         type : FETCH_BUTTON_CLICKED,
//         payload : [
//              {
//                userId:1,
//                id:1,
//                title:'provider',
//                body:'simple to get provider'  
//              },
//              {
//                 userId:1,
//                 id:2,
//                 title:'Editer',
//                 body:'simple to get Edit'  
//               },
//               {
//                 userId:1,
//                 id:3,
//                 title:'developer',
//                 body:'simple to get developer'  
//               },
//               {
//                 userId:1,
//                 id:4,
//                 title:'hoster',
//                 body:'simple to get hosting'  
//               }
//         ]
//     }
// }

export const fetchPosts=()=>dispatch=>{
  axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
  .then(res=>{
    dispatch({
      type:FETCH_BUTTON_CLICKED,
      payload:res.data
    })
  })
}


export const selectPost=(post) => {
  return {
    type:SELECT_POST,
    payload:post
  }  
};

