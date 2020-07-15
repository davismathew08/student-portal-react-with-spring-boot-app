import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
  
    const useStyles = makeStyles((theme) => ({
      
      title: {
          flexGrow: 1,
          marginLeft:25,
          fontFamily: 'Montserrat', 
          fontWeight:"bold",
          fontSize: 30,
          textShadow: '1px 1px 2px red'
      
        }
      }));

    const classes = useStyles();

    return (
         <div >
           <AppBar position="static" >
            <Toolbar  >
              <Typography variant="h6" className={classes.title}>
                  STUDENT PORTAL
            </Typography>
            </Toolbar>
      </AppBar>
      </div>
    );
  }