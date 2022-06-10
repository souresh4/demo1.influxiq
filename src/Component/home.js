
import React from "react";
import '../Assets/home.css'
import { Box, Button, Card, Container, Menu, Item, MenuList, Paper, Stack, Avatar, Divider, TextField,  } from '@mui/material';
import { Apps, AssignmentInd, ContactMail } from "@mui/icons-material";
import { LinearProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import PaymentIcon from '@mui/icons-material/Payment';
import AddCommentIcon from '@mui/icons-material/AddComment';
import SearchIcon from '@mui/icons-material/Search';
import  Avatar1  from "../img/one.jpg";
import  Avatar2  from "../img/two.jpg";
import  Avatar3  from "../img/three.jpg";

export const Home = () => {



  return (
    <>
    <Container maxWidth="false" className="Wrapper">
      <Container maxWidth="false" className="Container">

            <Card component="div" className="leftBlock" sx={{display:'inline-block'}} > 
            
                <Stack spacing={1} className="menu">
                    <ul className="menulist">
                        <h4> PATIENT</h4>
                        <li> <HomeIcon/> Dashboard</li>
                        <li> <AddCommentIcon/> Enquiries</li>
                        <li> <PersonIcon/> Profile</li>
                        <li><PaymentIcon/> Payments</li>
                    </ul>
                </Stack>

                <Card component="div" className="needhelp">
                        <h3>Need our help?</h3> 
                        <Button variant="contained" className="contactbtn">Contact us</Button>
                </Card>
        
            </Card>

            <Card component="div" className="rightBlock" sx={{ display: 'inline-block',p: 2 }}> 
                <Card component="div" className="searchSection"> 
                 <SearchIcon/> <TextField id="standard-basic" label="Search" variant="standard" className="searchbar"/> 
                </Card>
            
                <Card component="div" className="pProfile">

                        <h2>  My patient profiles </h2>

                        <Card component="div" className="cardSection" sx={{ p: 2}}> 

                            <Card component="span" className="cards" sx={{ p: 2}}>
                                <Avatar alt="Remy Sharp" src={Avatar1} className="avatar" />
                                <h3> Jonathan Smith</h3>
                                <p>Active</p> 
                                <LinearProgress variant="determinate" value={50} />
                                <p>Storage : 45%</p> 

                            </Card>

                            <Card component="span" className="cards" sx={{ p: 2}}>
                                <Avatar alt="Remy Sharp" src={Avatar2} className="avatar"/>
                                <h3> Kate Smith</h3>
                                <p>Active</p> 
                                <LinearProgress variant="determinate" value={50} />
                                <p>Storage : 45%</p> 

                            </Card>

                            <Card component="span" className="cards" sx={{ p: 2}}>
                                <Avatar alt="Remy Sharp" src={Avatar3} className="avatar"/>
                                <h3> Alexandra Smith</h3>
                                <p>Inactive</p> 
                                <LinearProgress variant="determinate" value={50} />
                                <p>Storage : 45%</p> 
                            </Card>

                            <Card component="span" className="cards addP" sx={{ p: 2, border: '1px dashed grey' }}>
                                <AddIcon className="Addicon"/>
                                <h4>Create New Patient Profile</h4>
                            </Card>
                            
                          </Card>
                      </Card>

                     <Divider light />
                       
                        <Card component="div" className="AvailablePatients">
                            <Card component="span" className="progress" sx={{ p: 2}}>
                                <h4>Available Patient profiles 3 of 5</h4>
                                <LinearProgress variant="determinate" value={50} />
                            </Card>
                            <Card component="span" className="Upgradebtn" sx={{ p: 2}}>
                                <Button variant="outlined" className="upbtn">Upgrade</Button>
                            </Card>
                        </Card>
            </Card>



            </Container>
        
      </Container>
    </>
  );
}

