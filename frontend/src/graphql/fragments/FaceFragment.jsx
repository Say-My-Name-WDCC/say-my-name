import {gql} from '@apollo/client'

export default gql`
  fragment FaceFragment on Face {
    id
    firstname
    lastname
    image
  }
`
