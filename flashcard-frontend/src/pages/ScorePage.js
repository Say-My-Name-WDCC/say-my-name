import React from 'react';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';

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
            <div className="ScorePage" >
                
                <h1>{ textToShow }</h1>
                <br />
                <p>score: {score}/5</p>
                <br /><br />

                <Button variant="contained" color="primary">Back</Button>
                <Button variant="contained" color="primary">Play Again</Button>
            </div>
        </center>
    );
}

export default ScorePage