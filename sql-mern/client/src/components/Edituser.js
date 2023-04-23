
import { FormGroup, FormControl , InputLabel,Input , styled, Button, Typography} from '@mui/material';
import { useState , useEffect} from 'react';
import {editUser} from '../APIcalling/api';
import {useNavigate, useParams} from 'react-router-dom';

import { getuser} from '../APIcalling/api';





const Controller=styled( FormGroup)`
width:50%;
margin: 6% auto 0 auto;
& > div {
margin-top:24px}
`

const intialvalue={
    name:'',
    email:'',
    age:'',
    mobile:''
}


const Edituser = ()=>{
    const [user, setuser]=useState(intialvalue)
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(()=>{
          loadUserDetails();
    }, [])
const loadUserDetails = async()=>{
    const response = await getuser(id); 
    setuser(response.data[0]);
}
console.log(user);
const valuechange =(e)=>{
    console.log( e.target.name,e.target.value)
   setuser({...user, [e.target.name]:e.target.value})
   console.log(user);
 
}

 const AdduserDetails = async(e)=>{
    e.preventDefault()
   await editUser(user, id);
   navigate('/allusers');
 }

    return(
   <Controller>
       <Typography variant='h4'><div className='text-white'>Edit user</div></Typography>
    <FormControl>
<InputLabel>Name</InputLabel>
<Input onChange={(e)=>valuechange(e)} name='name' value={user.name}/>
    </FormControl>

    <FormControl>
<InputLabel>Email</InputLabel>
<Input onChange={(e)=>valuechange(e)} name='email' value={user.email}/>
    </FormControl>

    <FormControl>
<InputLabel>age</InputLabel>
<Input onChange={(e)=>valuechange(e)}  name='age' value={user.age}/>
    </FormControl>

    <FormControl>
<InputLabel>Mobile</InputLabel>
<Input onChange={(e)=>valuechange(e)} name='mobile' value={user.mobile}/>
    </FormControl>
    <FormControl>
    <Button onClick={(e)=>AdduserDetails(e)} variant="contained">Edit-User</Button>
    </FormControl>

   </Controller>
        
    )
}


export default Edituser;