import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Avatar, LinearProgress } from '@material-ui/core';

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

const QuestionPage = props => {
    const classes = useStyles();
    return (
        <div>
            <br/>
            <BorderLinearProgress variant="determinate" value={props.score} />


            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{props.name}</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <center>
                            <Avatar alt="Remy Sharp" src={props.choices[0]} className={classes.large} />
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <center>
                            <Avatar alt="Remy Sharp" src={props.choices[1]} className={classes.large} />
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <center>
                            <Avatar alt="Remy Sharp" src={props.choices[3]} className={classes.large} />
                        </center>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <center>
                            <Avatar alt="Remy Sharp" src={props.choices[4]} className={classes.large} />
                        </center>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default QuestionPage