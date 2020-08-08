import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from "react-h5-audio-player";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    div: {
        //background: 'blue'        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },

  }));


function ProfileName(){
    const classes = useStyles();

    return(
        <div className={classes.div}>
            <h3>Name:</h3>
            <h3>Courses:</h3>
            {/* <label className={classes.large}>Name:</label>
            <label className={classes.large}>Courses:</label> */}
             <span><ReactAudioPlayer
        src="./Neville.mp3"
        type= "audio/mpeg"
        autoPlay
        controls/></span>
        <span>
            <h3><box component="span" m={1}><button onClick={clickHandler} className={classes.root}>Next</button></box></h3>
              </span>              
        </div>
                
            // <AudioPlayer
            //   autoPlay
            //   src="./Neville.mp3"
            //   onPlay={e => console.log("onPlay")}
            //   // other props here
            // />   
      )
}

export default ProfileName;
