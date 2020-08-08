import React from 'react';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { spacing } from '@material-ui/system';

function ScorePage({score}){
    let textToShow = null;
    if(score >= 4 ) {
        textToShow = "WOW, You are amazing!!!";
    }else if(score == 3){
        textToShow = "Your friends are waiting for you to remember their names!";
    }else{
        textToShow = "How dare you forgot my name!";
    }

    return(

        <center>
            <br />
            <div style={{display: "flex", height: "100vh", flexDirection: "column"}}>
                <div style={{flex: "auto"}}>
                    <Typography variant="h2" >{ textToShow }</Typography>
                    <br />
                    <Typography variant="h4">Score: {score}/5</Typography>
                    <br /><br />
                </div>
                <div style={{flex: 1}}>
                    <Button variant="contained" size="large" color="primary" href="/" style={{margin: "20px"}}>Back</Button>
                    
                    <Button variant="contained" size="large" color="primary" href="/game">Play Again</Button>
                </div>
            </div>
        </center>
    );
}

export default ScorePage