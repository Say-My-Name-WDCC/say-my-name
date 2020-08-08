import { gql } from '@apollo/client'
import FaceFragment from '../fragments/FaceFragment'

const FacesQuery = gql`
    query Faces($courseID:ID!, $count:Int!) {
        faces(courseID: $courseID, count: $count) {
            ...FaceFragment
        }
    }
    ${FaceFragment}
`

export { FacesQuery }