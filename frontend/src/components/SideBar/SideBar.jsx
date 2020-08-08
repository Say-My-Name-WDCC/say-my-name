import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, Divider ,ListItem,ListItemIcon,ListItemText, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  }));

  const nav = [
    {
        name: "Home",
        icon: <HomeIcon/>,
        location:"/"
    },{
      name: "Courses",
      icon: <GroupIcon/>,
      location: "/courses"
    },{
      name: "Peoples",
      icon: <PersonIcon/>,
      location: "/people"
    }
]

const SideBar = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={()=>props.setOpen(false)}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {nav.map((item, i) => (
                    <ListItem component={Link} to={item.location} button key={i}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    )
}

export default SideBar