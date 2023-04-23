import React, { useEffect, useState } from 'react'
import { getsingleuser } from '../APIcalling/api';
import { Link, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function View() {
    const {id}= useParams()
    const [user, states]=useState()


useEffect(()=>{
    data();
},[])
const data = async()=>{
 let res = await getsingleuser(id)
 res = res.data

 states(res);
console.log(res);
}

 
  return (
  <>
  

<Box>

  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  style={{backgroundColor:"white"}}>

  </Box>



    <CardContent>
     { user && user.map((val,i)=>{
        return(
<>      <Typography sx={{ fontSize: 24 }} color="primary" gutterBottom>
          ID: {val.id}
      </Typography>
      <Typography variant="h5" component="div">
    {val.email}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
       name:{val.name}
      </Typography>
      <Typography variant="body2">
      age:{val.age}
        <br />
       mobile: {val.mobile}
      </Typography>
      </>

      )})}
    </CardContent>
    <CardActions>
      <Button size="small" component={Link} to="/allusers" variant='contained'>Learn More</Button>
    </CardActions>
  




</Box>
  
  </>
  )
}

export default View;
