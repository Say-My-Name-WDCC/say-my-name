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

const GameQuestion = props => {
    const person1 = "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    const person2 = "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
    const person3 = "https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    const person4 = "https://images.unsplash.com/photo-1521038199265-bc482db0f923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    const classes = useStyles();
    return (
        <div>
            <h1></h1>
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

export default GameQuestion