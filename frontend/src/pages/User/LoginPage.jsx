import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Typography, Box, Link, CssBaseline, Button, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { LoginMutation } from '../../graphql/queries/UserQuery';
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

const LoginPage = () => {

    const [login] = useMutation(LoginMutation)
    const classes = useStyles()
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log("Submitted!")
        try {
            const { data } = await login({
                variables: {
                    input: {
                        email,
                        password
                    }
                }
            })
            localStorage.setItem("token", data.login.authToken.accessToken)
            history.push('/')
            window.location.reload()
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
                    <TextField required variant="outlined" onChange={e=>setEmail(e.target.value)} value={email} type="email" label="Email" style={{width: "100%", marginTop: "20px"}} />
                    <TextField required variant="outlined" onChange={e=>setPassword(e.target.value)} value={password} type="password" label="Password" style={{width: "100%", marginTop: "20px"}} />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >Sign In</Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}


export default LoginPage