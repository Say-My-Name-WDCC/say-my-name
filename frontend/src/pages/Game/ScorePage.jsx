import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const ScorePage = () => {
    let { score } = useParams()
    let textToShow = null;
    let imgToShow = null;
    if (score >= 4) {
        textToShow = "WOW, You are amazing!!!";
        if (score >= 5) {
            imgToShow = "./pngfuel.com (2).png";
        } else {
            imgToShow = "./pngfuel.com (3).png";
        }
    } else if (score === 3) {
        textToShow = "Your friends are waiting for you to remember their names!";
        imgToShow = "./pngfuel.com (4).png";
    } else {
        textToShow = "How dare you forgot my name!";
        imgToShow = "cry.png";
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
                    <Button variant="contained" size="large" color="primary" href="/" style={{ margin: "20px" }}>Back</Button>

                    <Button variant="contained" size="large" color="primary" href="/game">Play Again</Button>
                </div>
            </div>
        </center>
    );
}

export default ScorePage