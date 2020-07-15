import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import React, { useState,useEffect } from "react";
import RotateLeftIcon from '@material-ui/icons/RotateLeft'; 

import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import axios from 'axios'; 


export default function StudentList() {

  const defaultProps = {
    bgcolor: '#106E88 ',
    borderColor: 'grey.500',
    m: 1,
    border: 5,
    style: { width: '45rem', height: '29rem' },
  };
  const headingLabel = {
    fontFamily: 'Montserrat', 
    fontSize: 25,
    fontWeight:"bold",
    color: "	#FFFFFF",
    textAlign: "center",
    paddingTop: "100px",
    marginLeft:250,
}
const alignment = {
      marginLeft:220,
}
const initialValue = [
  { id:"",name: "",dateofbirth: "",class_name:"",division:"",gender:"" }];


const [stateOptions, setStateValues] = useState(initialValue);  
console.log(initialValue.length);

useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get('http://localhost:8080/student/all');
    console.log(response.data)
    setStateValues(response.data);
  }
  
  fetchData();
}, []);
function onClick() {
  axios.get(`http://localhost:8080/student/all`)
    .then(res => {
      console.log("inside axios");
      console.log(res);
      setStateValues(res.data);
      //console.log(res.data);
    })
}
    return (
      <div>
        <Box display="flex" justifyContent="center">
            <Box borderRadius={16} {...defaultProps} >
            <br/>
            <div>
                   <label style={headingLabel}>      
                       STUDENTS LIST
                       </label>
                       {/* style={alignment}  */}
                        <IconButton onClick={ onClick} style={alignment} color="default" aria-label="upload picture" component="span">
                        <RotateLeftIcon/>
                        </IconButton>
                       
                       
                   </div>
                   <Divider/>
                   <div>
        

      <TableContainer component={Paper} style={{'height': '360px',  'overflow':'scroll', 'display': 'block'}}>  
        <Table stickyHeader  aria-label="sticky table" >  
          <TableHead>  
            <TableRow>  
              <TableCell>Id</TableCell>  
              {/* <TableCell align="right">Id</TableCell>   */}
              <TableCell align="right">Name</TableCell>  
              <TableCell align="right">Date of Birth</TableCell>  
              <TableCell align="right">Class</TableCell>  
              <TableCell align="right">Division</TableCell>  
              <TableCell align="right">Gender</TableCell>  
              {/* <TableCell style={{paddingRight:"60px"}} align="right" >Department</TableCell>   */}
            </TableRow>  
          </TableHead>  
          <TableBody >  
            {  
              stateOptions.map((p, index) => {  
                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {p.id}  
                  </TableCell>  
                  <TableCell align="right">{p.name}</TableCell>  
                  <TableCell align="right">{p.dateofbirth}</TableCell>  
                  <TableCell align="right">{p.class_name}</TableCell>  
                  <TableCell align="right">{p.division}</TableCell>  
                  <TableCell align="right">{p.gender}</TableCell>  
                  {/* <TableCell align="right">{p.Salary}</TableCell>  
                  <TableCell style={{paddingRight:"114px"}} align="right">{p.Department}</TableCell>   */}
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
      </TableContainer>  
                  </div>
            </Box>
        </Box>
      </div>
    );
 }
        