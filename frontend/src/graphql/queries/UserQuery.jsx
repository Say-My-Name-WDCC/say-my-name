import { gql } from '@apollo/client'
import UserFragment from '../fragments/UserFragment'
import CourseFragment from '../fragments/CourseFragment'

const UsersQuery = gql`
    query Users {
        users {
            ...UserFragment
        }
    }
    ${UserFragment}
`

const UserQuery = gql`
    query User($id: ID!) {
        user(id: $id) {
            ...UserFragment
        }
    }
    ${UserFragment}
`

const MyCoursesQuery = gql`
    query Me {
        me {
            ...UserFragment
            courses{
                ...CourseFragment
            }
        }
    }
    ${UserFragment}
    ${CourseFragment}
`


const UserCoursesQuery = gql`
    query User($id: ID!) {
        user(id: $id) {
            ...UserFragment
            courses{
                ...CourseFragment
            }
        }
    }
    ${UserFragment}
    ${CourseFragment}
`

const LoginMutation = gql`
    mutation($input: LoginInput!){
        login(input:$input){
            authToken{
                accessToken
            }
        }
    }
`

const UpdateUser = gql`
    mutation($id: ID!,$input: UserInput!){
        updateUser(id: $id, input: $input){
            ...UserFragment
        }
    }
    ${UserFragment}
`

const CreateUser = gql`
    mutation($input: UserInput!){
        createUser(input: $input){
            authToken{
                accessToken
            }
        }
    }
`

export { UsersQuery, UserQuery, UserCoursesQuery, LoginMutation, UpdateUser, CreateUser, MyCoursesQuery }