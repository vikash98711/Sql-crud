

import axios from 'axios';

const URL = 'http://localhost:8001';

 export const adduser= async(data)=>{
    try{
       await axios.post(`${URL}/create`, data)

    }catch(error){
        console.log('api calling is not connecting correct ',error)

    }
}


 export  const getuser = async()=>{
    try{
     return  await axios.get(`${URL}/getusers`)

    }catch(error){
        console.log('error while calling getusers')
     
    }
}

// edituser api 
// export const getUser =async(id)=>{
//     try{
//   return await axios.get(`${URL}/${id}`);
//     }catch(error){
//         console.log('error while calling getUser',error)

//     }
// }

export const editUser = async(user, id)=>{
    try{
        return await 
        axios.put(`${URL}/updateuser/${id}`,user);

    }catch(error){
        console.log('error  while calling editUser api',error)

    }
}


// deleteUser api call

export const deleteUser= async(id)=>{
   try{
    return await axios.delete(`${URL}/deleteuser/${id}`);

   }catch(error){
    console.log("error while calling deleteUser api",error);
   }
}



// single user view port starting

export  const getsingleuser = async(id)=>{
    try{
     return  await axios.get(`${URL}/induser/${id}`)

    }catch(error){
        console.log('error while calling getusers')
     
    }
}



// single user view port ending 





// export default {adduser, getuser};