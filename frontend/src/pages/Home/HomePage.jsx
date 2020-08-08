import React from 'react';
import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { UserQuery } from '../../graphql';

const HomePage = ({ name, courses }) => {
    let { id } = useParams()
    const history = useHistory()

    const { loading, error, data } = useQuery(UserQuery, {
        variables: { id: id }
    })

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <Spinner/>
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            <div style={{ flex: 1 }}>
                <Avatar
                    src='https://image.shutterstock.com/z/stock-vector-default-avatar-profile-icon-grey-photo-placeholder-518740741.jpg'
                    style={{ width: "10rem", height: "10rem", marginLeft: "auto", marginRight: "auto" }}
                />
            </div>
            <div style={{ flex: 1, display: "grid", placeItems: "center", marginTop: "10px" }}>
                <Typography variant="h4">{name}</Typography>
            </div>
            <div style={{ flex: "auto", paddingTop: "20px" }}>
                <List>
                    {
                        courses.map((course) =>
                            <ListItem button>
                                <ListItemText primary={course} />
                            </ListItem>
                        )
                    }
                </List>
            </div>
        </div>
    )
}

export default HomePage