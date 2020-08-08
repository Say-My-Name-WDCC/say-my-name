import React from 'react';
import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core';

export default function HomePage({name, courses}) {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{flex: 1}}>
                <Avatar
                    src='https://image.shutterstock.com/z/stock-vector-default-avatar-profile-icon-grey-photo-placeholder-518740741.jpg'
                    style={{width: "10rem", height: "10rem", marginLeft: "auto", marginRight: "auto"}}
                />
            </div>
            <div style={{flex: 1, display: "grid", placeItems: "center", marginTop: "10px"}}>
                <Typography variant="h4">{name}</Typography>
            </div>
            <div style={{flex: "auto", paddingTop: "20px"}}>
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