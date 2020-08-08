import React from 'react'
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Account from './Account';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const NavBar = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color='secondary' position="static">
                <Toolbar>
                    <IconButton
                        onClick={() => props.setOpen(true)}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>Say My Name</Typography>
                    <Account />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar