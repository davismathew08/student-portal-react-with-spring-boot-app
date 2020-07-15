import React from 'react';
import {useForm} from "react-hook-form";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import moment from 'moment';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Register() {
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit,errors,reset} = useForm();
    const onSubmit = (data, e) => {
        setOpen(true);
        console.log(data, e);
        reset(); 
        axios.put(`http://localhost:8080/student/`,data)
    .then(res => {
      console.log("inside axios");
      console.log(res);
      console.log(res.data);
      
    })
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const defaultProps = {
        bgcolor: '#106E88 ',
        borderColor: 'grey.500',
        m: 1,
        border: 5,
        style: { width: '30rem', height: '29rem' },
      };
      const headingLabel = {
        fontSize: 25,
        fontFamily: 'Montserrat', 
        fontWeight:"bold",
        color: "	#FFFFFF",
        textAlign: "right",
        paddingTop: "100px",
        // textDecorationLine: 'underline'
    }
    const lableobj = {
        fontSize: 15,
        fontFamily: 'Montserrat', 
        fontWeight:"bold",
        color: "	#FFFFFF",
        // textAlign: "center",
        paddingTop: "100px",
    }
    const radioobj = {
        fontSize: 15,
        fontFamily: 'Montserrat', 
        // fontWeight:"bold",
        color: "	#FFFFFF",
        // textAlign: "center",
        paddingTop: "100px",
        margin:"10px"
    }
    const errorobj = {
        fontSize: 12,
        fontFamily: 'Montserrat', 
        // fontWeight:"bold",
        color: "#FF0000",
        // textAlign: "center",
        paddingTop: "100px",
    }

    return (
        <div  >
            <Box display="flex" justifyContent="center">
                <Box borderRadius={16} {...defaultProps} >
                <form onSubmit={handleSubmit(onSubmit)}>
                <br/>
                <div>
                   
                <label style={headingLabel}>
                    
                    REGISTRATION</label><br/>
                </div><br/>
                <Divider/>
            <div>
                <br/>
                <label style={lableobj}>Name:</label><br/>
             <input 
                     name="name"
                     style = {{width: 200}}
                     ref={register({ required: true,  pattern: /[A-Za-z]{3}/,maxLength: 10,})}
                 /><br/>
                 {errors.name?.type === "required" &&
                     <span style={errorobj}>This is required</span>}
                      
                 {errors.name?.type === "maxLength" &&
                     "Max length exceeded"}

            </div>
            
            <div>
            <label style={lableobj}>
                 Date of Birth:
             </label><br/>
            
             <input type="date" style = {{width: 200}} ref={register({ required: true})} max={moment().format("YYYY-MM-DD")} name="dateofbirth" /><br/>
                     {errors.dob1?.type === "required" &&
                     <span style={errorobj}>This is required</span>}
            </div>
            <div>
            <label style={lableobj}>
                 Class:
             </label><br/>
             
            <select name="class_name" style = {{width: 200}} ref={register({ required: true})}>
                 <option value="I">I</option>
                 <option value="II">II</option>
                 <option value="III">III</option>
                 <option value="IV">IV</option>
                 <option value="V">V</option>
                 <option value="VI">VI</option>
             </select><br/>
             {errors.dob1?.type === "required" &&
                     <span style={errorobj}>This is required</span>}
            </div>
            <div>
            <label style={lableobj}>
                 Class:
             </label><br/>
             
            <select name="division" style = {{width: 200}} ref={register({ required: true})}>
                 <option value="A">A</option>
                 <option value="B">B</option>
                 <option value="C">C</option>
                 <option value="D">D</option>
             </select><br/>
             {errors.dob1?.type === "required" &&
                     <span style={errorobj}>This is required</span>}
            </div>
            <div>
            <label style={lableobj}>
                 Gender:
             </label><br/>
             <input type="radio" name="gender" value="male" ref={register({ required: true})} />
             <label  style={radioobj}>Male</label>
             &emsp; &emsp;
             <input type="radio" name="gender" value="female" ref={register({ required: true})} />
             <label style={radioobj}>Female</label><br/>
             {errors.dob1?.type === "required" &&
                     <span style={errorobj}>This is required</span>}
            </div>
         <br/>
         {/* <button type="submit">Submit</button> */}
         <Button
          style={{fontFamily: 'Montserrat'}}
         type="submit"
        variant="contained"
        color="white"
        size="small"
        startIcon={<SaveIcon />}
      >
        Submit
      </Button>
         </form>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Inserted Successfully...!
        </Alert>
      </Snackbar>
                </Box>
            </Box>
        </div>
    );
 }
        