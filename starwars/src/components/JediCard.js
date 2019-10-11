//start w imports
import React from 'react';
import {Card, CardText, CardTitle} from 'reactstrap';

//making function that will return a reactstrap card with some text and a title. Im thinking the character name should be title. probably will add more props as I get finished, dont wanna waste time doing too much

export default function JediCard(daProps){
    return(
        <Card className = 'characterCard'>
            <CardTitle><h3>{daProps.name}</h3></CardTitle>
            <CardText>Character Eye Color: {daProps.eye_color}</CardText>
        </Card>
    )
}