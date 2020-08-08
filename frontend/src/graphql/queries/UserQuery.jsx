import { gql } from '@apollo/client'
import UserFragment from '../fragments/UserFragment'

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

export { UsersQuery, UserQuery }