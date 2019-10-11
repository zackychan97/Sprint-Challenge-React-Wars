//start w imports
import React from 'react';
import {Card, CardText, CardTitle} from 'reactstrap';

//making function that will return a reactstrap card with some text and a title. Im thinking the character name should be title. probably will add more props as I get finished, dont wanna waste time doing too much
export default function JediCard(props) {

    return (
        <Card className="jediProfile">
            <CardTitle><h2>{props.name}</h2></CardTitle>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Eye Color: {props.eye_color}</CardText>
            <CardText>Hair: {props.home_world}</CardText>
        </Card>
    )
}