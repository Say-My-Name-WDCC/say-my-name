import {gql} from '@apollo/client'

export default gql`
  fragment CourseFragment on Course {
    id
    name
    description
    image
  }
`
