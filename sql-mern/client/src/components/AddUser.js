
import { FormGroup, FormControl , InputLabel,Input , styled, Button, Typography} from '@mui/material';
import { useState } from 'react';
import {adduser} from '../APIcalling/api';
import {useNavigate} from 'react-router-dom';



const Controller=styled( FormGroup)`
width:50%;
margin: 2% auto 0 auto;
& > div {

height:96px}
`
const Label =styled(InputLabel)`
color:darkgrey;
`

const intialvalue={
    name:'',
    email:'',
    age:'',
    mobile:''
}


const AddUser = ()=>{
    const [user, setuser]=useState(intialvalue)
    const [valname ,getvalname]=useState("")
    const [valusername ,getvalusername]=useState("")
    const [valemail ,getvalemail]=useState("")
    const [valphone ,getvalphone]=useState("")

    
    const navigate = useNavigate();

const valuechange =(e)=>{
    // console.log( e.target.name,e.target.value)
   setuser({...user, [e.target.name]:e.target.value})
//    console.log(user);

 
}

//  const AdduserDetails = async()=>{
//    await adduser(user)
//    navigate('/allusers');
//  }
 const handling =()=>{
    if(user.name !=="" && user.email !== ""  && user.age !== ""  && user.mobile !== ""  ){
       console.log(user);
       const AdduserDetails = async()=>{
        await adduser(user)
        navigate('/allusers');
      };
      AdduserDetails()

    }else{
        if(user.name === ""  ){
            getvalname("enter your details")
        }
        else{
            getvalname("")

        }
        if(user.email === ""  ){
            getvalusername("enter your details")
        }
        else{
            getvalusername("")

        }
        if(user.age === ""  ){
            getvalemail("enter your details")
        }
        else{
            getvalemail("")

        }
        if(user.mobile === ""  ){
            getvalphone("enter your details")
        }
        else{
            getvalphone("")

        }
    }
 }

    return(
   <Controller>
       <Typography variant='h4'  style={{marginBottom: 20}}><div className='text-white'>Add user</div></Typography>
    <FormControl>
<Label>Name</Label>
<Input onChange={(e)=>valuechange(e)} name='name'/>
<p style={{color:"red"}}>{valname}</p>
    </FormControl>

    <FormControl>
<Label>Email</Label>
<Input onChange={(e)=>valuechange(e)} name='email'/>
<p style={{color:"red"}}>{valusername}</p>
    </FormControl>

    <FormControl>
<Label>Age</Label>
<Input onChange={(e)=>valuechange(e)}  name='age' />
<p style={{color:"red"}}>{valemail}</p>
    </FormControl>

    <FormControl>
<Label>Mobile</Label>
<Input onChange={(e)=>valuechange(e)} name='mobile' />
<p style={{color:"red"}}>{valphone}</p>
    </FormControl>
    <FormControl>
    <Button onClick={()=>handling()} variant="contained">Create-User</Button>
    </FormControl>

   </Controller>
        
    )
}


export default AddUser;