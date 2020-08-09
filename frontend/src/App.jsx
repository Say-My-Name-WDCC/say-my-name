import React, { useState } from 'react'
import { ThemeProvider, createMuiTheme, Container, makeStyles } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './graphql'
import clsx from 'clsx';
import { HomePage, QuestionPage, ScorePage, ProfilePage, LoginPage, RegisterPage } from './pages'

import './App.css';
import MyProfilePage from './pages/User/MyProfilePage'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import AddCoursePage from './pages/Home/AddCourse'
import UpdateUserPage from './pages/User/UpdateUser'
import Courses from './pages/Home/Courses'



const theme = createMuiTheme({
    palette: {
    },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const App = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <NavBar setOpen={setOpen} />
                    <SideBar open={open} setOpen={setOpen} />
                    <main
                        className={clsx(classes.content, {
                            [classes.contentShift]: !open,
                        })}
                    >
                        <Container className="App" maxWidth="sm">
                            <Switch>
                                <Route exact path="/game/question/:id" component={QuestionPage} />
                                <Route exact path="/game/score/:score" component={ScorePage} />
                                <Route exact path="/login" component={LoginPage} />
                                <Route exact path="/me" component={MyProfilePage} />
                                <Route exact path="/profile/:id" component={ProfilePage} />
                                <Route exact path="/" component={HomePage} />
                                <Route exact path="/courses" component={Courses} />
                                <Route exact path="/add/course" component={AddCoursePage} />
                                <Route exact path="/edit/course/:id" component={AddCoursePage} />
                                <Route exact path="/edit/me" component={UpdateUserPage} />
                                <Route exact path="/register" component={RegisterPage}/>
                                {/*}
                            <Route path="/game">
                                <GameQuestion
                                    name={"A very cool names"}
                                    choices={[
                                        "https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                                        "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
                                        "https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
                                        "https://images.unsplash.com/photo-1521038199265-bc482db0f923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                    ]}
                                    score={50}
                                />
                            </Route>
                            <Route path="/score">
                                <ScorePage score={9} />
                            </Route>
                            <Route path="/profile">
                                <ProfilePage />
                            </Route>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <Route path="/">
                                <HomePage name="Hiruna Jayamanne" courses={["SOFTENG211"]} />
                                </Route>*/}
                            </Switch>
                        </Container>
                    </main>
                </BrowserRouter>
            </ApolloProvider>
        </ThemeProvider>
    );
}

export default App;
