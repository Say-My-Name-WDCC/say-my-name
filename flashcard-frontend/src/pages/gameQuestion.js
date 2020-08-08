import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);




function GameQuestion(props){

    const classes = useStyles();
    const history = useHistory();
    const handleClickf = () => {
      history.push("/result");
    }

    const cardChoices = props.choices.map((choice) =>
    <Grid item xs={6}>
      <Paper className={classes.paper} onClick={handleClickf} >
        
        <center>
        <Avatar alt="Remy Sharp" src= {choice} className={classes.large} />
        </center>
      </Paper>
    </Grid>)
    
    return(
    <div>
        <h1></h1>
        <BorderLinearProgress variant="determinate" value={props.score} />


        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{props.name}</Paper>
        </Grid>

        {cardChoices}

      </Grid>
        
    </div>)
}

export default GameQuestion