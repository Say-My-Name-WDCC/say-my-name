import { gql } from '@apollo/client'
import { UserFragment } from '../fragments'

export default gql`
    query Users {
        users {
            ...Users
        }
    }
    ${UserFragment}
`
