import {CourseQuery, CoursesQuery} from './queries/CourseQuery'
import {UserQuery, UsersQuery} from './queries/UserQuery'
import CourseFragment from './fragments/CourseFragment'
import UserFragment from './fragments/UserFragment'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? token : "",
        }
    }
});

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL,
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});


export default client

export { CourseFragment, UserFragment, CourseQuery, UserQuery }