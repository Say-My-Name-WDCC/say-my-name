import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Typography, Box, Link, CssBaseline, Button, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { UpdateUser } from '../../graphql/queries/UserQuery';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">Say My Name</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const UpdateUserPage = () => {

    const [updateUser] = useMutation(UpdateUser)
    //const [updateCourse] = useMutation(UpdateCourse)
    const classes = useStyles()
    const history = useHistory()

    //const [courseId, setCourseId] = useState("")
    const [userId, setUserId] = useState("")
    const [userFirstName, setUserFirstName] = useState("")
    const [userLastName, setUserLastName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    //const [courseDescription, setCourseDescription] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log("Submitted!")
        try {
            const { data } = await updateUser({
                variables: {
                    input: {
                        id:userId,
                        firstname:userFirstName,
                        lastname:userLastName,
                        email:userEmail
                        //description:courseDescription
                    }
                }
            })
            //localStorage.setItem("token", data.login.authToken.accessToken)
            //history.push('/')
            //window.location.reload()
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Say My Name</Typography>
                <form onSubmit={onSubmit}>
                    <TextField required variant="outlined" onChange={e=>setUserId(e.target.value)} value={userId} type="TextField" label="Id" style={{width: "100%", marginTop: "20px"}} />
                    <TextField required variant="outlined" onChange={e=>setUserFirstName(e.target.value)} value={userFirstName} type="TextField" label="First Name" style={{width: "100%", marginTop: "20px"}} />
                    <TextField required variant="outlined" onChange={e=>setUserLastName(e.target.value)} value={userLastName} type="TextField" label="Last Name" style={{width: "100%", marginTop: "20px"}} />
                    <TextField required variant="outlined" onChange={e=>setUserEmail(e.target.value)} value={userEmail} type="email" label="Email" style={{width: "100%", marginTop: "20px"}} />
                    {/* <TextField required variant="outlined" onChange={e=>setCourseName(e.target.value)} value={courseName} type="TextField" label="Name" style={{width: "100%", marginTop: "20px"}} /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Add Course</Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}


export default UpdateUserPage