import React from 'react';
import Register from '../MainSub/Register';
import StudentList from '../MainSub/StudentList';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop:2,
      marginRight:0,
      marginLeft:0,
      height:482,
    },
  }));
  
export default function Main() {
  
    const classes = useStyles();
    
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
              <div>
                  <Register/>
              </div>
          </Paper>
        </Grid>
        
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <StudentList/>
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}
