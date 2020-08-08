import React from 'react';
import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { MyCoursesQuery } from '../../graphql/queries/UserQuery';

const HomePage = () => {
    const history = useHistory()

    const { loading, error, data } = useQuery(MyCoursesQuery)

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <Redirect to="/login" />
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            <div style={{ flex: 1 }}>
                <Avatar
                    src={data?.me?.image}
                    style={{ width: "10rem", height: "10rem", marginLeft: "auto", marginRight: "auto" }}
                />
            </div>
            <div style={{ flex: 1, display: "grid", placeItems: "center", marginTop: "10px" }}>
                <Typography variant="h4">{data?.me.firstname + " " + data?.me.lastname}</Typography>
            </div>
            <div style={{ flex: "auto", paddingTop: "20px" }}>
                <List>
                    {
                        data?.me.courses?.map((course) =>
                            <ListItem button>
                                <ListItemText primary={course.name} />
                            </ListItem>
                        )
                    }
                </List>
            </div>
        </div>
    )
}

export default HomePage