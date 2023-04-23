import {AppBar,Toolbar, styled, } from '@mui/material' ;
import './Navbar.css';



import { NavLink } from 'react-router-dom'
const Header = styled(AppBar)`
background-color:black; 

`
const Para = styled(NavLink)`
margin-right: 25px;
color:#fff;
text-decoration: none;

`

const Navbar =()=>{
    return(
        <Header position='static'>
            <Toolbar>
                <Para to ='/' className="Paras">Home</Para> 
                <Para to='allusers' className="Paras">All Users</Para> 
                <Para to='adduser' className="Paras"> Add User</Para>
                
            </Toolbar>
        </Header>
    )
}




export default Navbar