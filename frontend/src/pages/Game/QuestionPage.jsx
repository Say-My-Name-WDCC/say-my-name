import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Avatar, LinearProgress, Modal } from '@material-ui/core';
import { FacesQuery } from '../../graphql/queries/FileQuery';
import Spinner from '../../components/Spinner/Spinner';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Profile from '../../components/Profile/Profile';

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
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [score, setScore] = useState(0)
    const [pop, setPop] = useState("")
    const [step, setStep] = useState(0)
    const [guess, setGuess] = useState()

    const classes = useStyles();

    const { loading, error, data, refetch } = useQuery(FacesQuery, {
        variables: {
            courseID: id,
            count: 4
        }
    })

    useEffect(() => {
        if (data !== null && !loading && !error) {
            setGuess(data?.faces[Math.floor(Math.random() * data.faces.length)])
        }
    }, [data, loading, error])

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Redirect to="/login" />
    }

    const handleGuess = (user) => {
        if (guess.id === user.id) {
            setScore(score + 1)
        }
        setPop(user.id)
        setOpen(true)
        setStep(step + 1)
    }

    const handleClose = () => {
        if (step >= 5) {
            history.push('/game/score/' + score)
        }
        refetch()
        setOpen(false)
    }

    return (
        <div>
            <br />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Profile id={pop} />
            </Modal>
            <BorderLinearProgress variant="determinate" value={step * 20} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{guess?.firstname + " " + guess?.lastname}</Paper>
                </Grid>
                {
                    data?.faces?.map(user => {
                        return (
                            <Grid key={user.id} item xs={6}>
                                <Paper onClick={() => handleGuess(user)} className={classes.paper}>
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