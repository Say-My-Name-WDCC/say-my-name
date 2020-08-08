import React, { useEffect, useState } from 'react';
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

const data = {
    "faces": [
        {
            "id": "5f2e29659711155338ddb39a",
            "firstname": "test2",
            "lastname": "test2",
            "image": null
        }
    ]
}

const QuestionPage = () => { 
    const [score, setScore] = useState(0)
    const [user, setUser] = useState()
    useEffect(()=>{
        setUser(data.faces[Math.floor(Math.random() * data.faces.length)])
    },[data])
    const classes = useStyles();
    return (
        <div>
            <br />
            <BorderLinearProgress variant="determinate" value={score*20} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{user?.firstname + " " + user?.lastname}</Paper>
                </Grid>
                {
                    data.faces.map(() => {
                        return (
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <center>
                                        <Avatar alt="Guess Me" src={user?.image} className={classes.large} />
                                    </center>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>

        </div>
    )
}

export default QuestionPage