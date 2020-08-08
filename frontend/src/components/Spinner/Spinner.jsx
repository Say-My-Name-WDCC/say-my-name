import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    spinner: {
        position: 'fixed', /* or absolute */
        top: "50%",
        left: "50%",
        marginTop: "- 25px",
        marginLeft: "-25px",
        display: "inline-block !important",
        
    },
  }));

const Spinner = () => {
    const classes = useStyles()
    return <div className={classes.spinner}>
        <CircularProgress />
    </div>
}

export default Spinner 