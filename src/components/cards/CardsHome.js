import React, { Component } from 'react'
import {
    CardTitle,
    CardText,
    CardBody,
    Card,
    CardImg,
    CardGroup,
} from "reactstrap"


export default class CardsHome extends Component {
    render() {
        return (
            <div>

                <CardGroup>
                    <Card>
                        {/* <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        /> */}
                        <CardBody>
                            <CardTitle tag="h5">
                                Freelancers
                            </CardTitle>
                            
                            <CardText>
                                Total freelancers: sayı
                            </CardText>
                            
                        </CardBody>
                    </Card>
                    <Card>
                        {/* <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        /> */}
                        <CardBody>
                            <CardTitle tag="h5">
                                Tasks
                            </CardTitle>
                            
                            <CardText>
                                Total tasks: sayı
                            </CardText>
                           
                        </CardBody>
                    </Card>
                    <Card>
                        {/* <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            width="100%"
                        /> */}
                        <CardBody>
                            <CardTitle tag="h5">
                                Task rate
                            </CardTitle>
                           
                            <CardText>
                                Task rate %
                            </CardText>
                            
                        </CardBody>
                    </Card>
                </CardGroup>

            </div>
        )
    }
}
