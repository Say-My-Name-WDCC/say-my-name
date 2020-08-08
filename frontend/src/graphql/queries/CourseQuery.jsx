import { gql } from '@apollo/client'
import CourseFragment from '../fragments/CourseFragment'

const CoursesQuery = gql`
    query Courses {
        courses {
            ...CourseFragment
        }
    }
    ${CourseFragment}
`

const CourseQuery = gql`
    query Course($id: ID!) {
        course(id: $id) {
            ...CourseFragment
        }
    }
    ${CourseFragment}
`

export { CoursesQuery, CourseQuery }