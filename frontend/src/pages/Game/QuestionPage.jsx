import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Avatar, LinearProgress } from '@material-ui/core';
import { FacesQuery } from '../../graphql/queries/FileQuery';
import Spinner from '../../components/Spinner/Spinner';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

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

const QuestionPage = () => {
    let { id } = useParams()
    const [score, setScore] = useState(0)
    const [guess, setGuess] = useState()

    const classes = useStyles();

    const { loading, error, data } = useQuery(FacesQuery, {
        variables: {
            courseID: id,
            count: 4
        }
    })

    useEffect(() => {
        if (data !== null && !loading && !error) {
            setGuess(data?.faces[Math.floor(Math.random() * data.faces.length)])
        }
    }, [data,loading,error])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <br />
            <BorderLinearProgress variant="determinate" value={score * 20} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{guess?.firstname + " " + guess?.lastname}</Paper>
                </Grid>
                {
                    data?.faces?.map(user => {
                        return (
                            <Grid key={user.id} item xs={6}>
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