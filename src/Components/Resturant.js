import React from "react";
import {Row, Col,Card,CardBody,CardTitle,CardSubtitle,CardText} from "reactstrap";
import ReactStars from 'react-stars'

const Resturants = (resturant) => {
    debugger
    return(
            <Col xs="12" sm="4">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h1>{resturant.Brand}</h1>
                        </CardTitle>
                        <CardSubtitle>
                            {resturant.Variety}
                        </CardSubtitle>
                        <hr/>
                        <CardText>
                            <h6> Style : {resturant.Style} </h6>
                        </CardText>
                        <CardText>
                            <h6> Country : {resturant.Country} </h6>
                        </CardText>
                        {
                            resturant["Stars"] ? 
                            <CardText>
                                <ReactStars
                                    count = {5}
                                    value={resturant.Stars}
                                    size={24}
                                    edit ={false}
                                    half={true}
                                    color2={'#ffd700'} />
                            </CardText> : null
                        }
                        {
                            resturant["Top Ten"] ? 
                            <CardText>
                                <h6> Top Ten : {resturant["Top Ten"]} </h6>
                            </CardText> : null
                        }
                    </CardBody>
                </Card>
            </Col>
    )
}

export default Resturants;