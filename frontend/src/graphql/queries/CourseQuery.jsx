import { gql } from '@apollo/client'
import { CourseFragment } from '../fragments'

export default gql`
    query Courses {
        courses {
            ...Courses
        }
    }
    ${CourseFragment}
`
