import React from 'react'
import Spinner from '../../components/Spinner/Spinner'
import { Redirect, useHistory, Link } from 'react-router-dom'
import { List, ListItem, ListItemText, Button } from '@material-ui/core'
import { CoursesQuery, JoinCourse } from '../../graphql/queries/CourseQuery'
import { MyCoursesQuery} from '../../graphql/queries/UserQuery'
import { useQuery, useMutation } from '@apollo/client'

const Courses = () => {
    const history = useHistory()
    const { loading, error, data } = useQuery(CoursesQuery)

    const [joinClass] = useMutation(JoinCourse)

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Redirect to="/login" />
    }


    return <>
        <div style={{ flex: "auto", paddingTop: "20px" }}>
            <Button variant="contained" color="primary" component={Link} to={'/add/course'}>Add</Button>
            <List>
                {
                    data?.courses?.map((course) =>
                        <ListItem key={course.id} button>
                            <ListItemText onClick={() => history.push(`/game/question/${course.id}`)} primary={course.name} />
                            <Button onClick={() => joinClass({ variables: { id: course.id }, refetchQueries: [{query: MyCoursesQuery} ]})} variant="contained" color="primary">Join</Button>
                        </ListItem>
                    )
                }
            </List>
    </div>
    </>
}

export default Courses