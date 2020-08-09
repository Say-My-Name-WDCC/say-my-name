import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Typography, Box, Link, CssBaseline, Button, Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { CreateCourse, CoursesQuery } from '../../graphql/queries/CourseQuery';
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

const AddCoursePage = () => {

    const [createCourse] = useMutation(CreateCourse)
    //const [updateCourse] = useMutation(UpdateCourse)
    const classes = useStyles()
    const history = useHistory()

    //const [courseId, setCourseId] = useState("")
    const [courseName, setCourseName] = useState("")
    const [courseDescription, setCourseDescription] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log("Submitted!")
        try {
            const { data } = await createCourse({
                variables: {
                    input: {
                        name:courseName,
                        description:courseDescription
                    }
                }, refetchQueries: [{query: CoursesQuery} ]
            })
            history.push('/courses')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <GroupAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Add a Course</Typography>
                <form onSubmit={onSubmit}>
                    <TextField required variant="outlined" onChange={e=>setCourseName(e.target.value)} value={courseName} type="TextField" label="Name" style={{width: "100%", marginTop: "20px"}} />
                    <TextField required variant="outlined" onChange={e=>setCourseDescription(e.target.value)} value={courseDescription} type="TextField" label="Description" style={{width: "100%", marginTop: "20px"}} />
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


export default AddCoursePage