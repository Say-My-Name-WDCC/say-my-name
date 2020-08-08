import React from 'react';
import { ThemeProvider, createMuiTheme, Container } from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

import HomePage from './pages/HomePage';
import GameQuestion from './pages/GameQuestion';
import ScorePage from './pages/ScorePage';
import ProfilePage from "./pages/Profile";
import LoginPage from './pages/Login';

import './App.css';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const theme = createMuiTheme({
    palette: {
    },
  });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container className="App" maxWidth="sm">
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <Switch>
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
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </ApolloProvider>
            </Container>
        </ThemeProvider>
    );
}

export default App;
