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

const UpdateCourse = gql`
    mutation($id: ID!,$input: CourseInput!){
        updateCourse(id: $id, input: $input){
            ...CourseFragment
        }
    }
    ${CourseFragment}
`

const CreateCourse = gql`
    mutation($input: CourseInput!){
        createCourse(input: $input){
            ...CourseFragment
        }
    }
    ${CourseFragment}
`

export { CoursesQuery, CourseQuery, UpdateCourse, CreateCourse }