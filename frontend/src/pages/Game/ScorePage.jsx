import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';

const ScorePage = () => {
    let { score } = useParams()
    const history = useHistory()
    let textToShow = null;
    let imgToShow = null;
    if (score >= 4) {
        textToShow = "WOW, You are amazing!!!";
        if (score >= 5) {
            imgToShow = "/gold.png";
        } else {
            imgToShow = "/silver.png";
        }
    } else if (score >= 3) {
        textToShow = "Your friends are waiting for you to remember their names!";
        imgToShow = "/bronze.png";
    } else {
        textToShow = "How dare you forget my name!";
        imgToShow = "/cry.png";
    }

    return (
        <center>
            <br />
            <div style={{ display: "flex", height: "90vh", flexDirection: "column" }}>
                <div style={{ flex: "auto" }}>
                    <Typography variant="h3" >{textToShow}</Typography>
                    <br />
                    <Typography variant="h4" style={{ color: "grey" }}>Score: {score}/5</Typography>
                    <br /><br />

                    <img alt="Guess Me" src={imgToShow} width="200"></img>
                </div>
                <div style={{ flex: 1 }}>
                    <Button variant="contained" size="large" color="primary" href="/" style={{ margin: "20px" }}>Home</Button>

                    <Button variant="contained" size="large" color="primary" onClick={()=>history.goBack()}>Play Again</Button>
                </div>
            </div>
        </center>
    );
}

export default ScorePage
