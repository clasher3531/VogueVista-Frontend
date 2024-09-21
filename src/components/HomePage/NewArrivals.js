import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NewArrivals() {
    const navigate = useNavigate()
    function shopnowbuttonhandler() {
        navigate('/allProducts');
    }
    return (
        <div className="new-arrivals-main">
            <Container>
                <Row>
                    <Col xs={11} sm={11} md={10} lg={8}>
                        <div className="new-arrival-banner-image">
                            <img className="new-arrival-image" src="https://themewagon.github.io/famms/images/arrival-bg.png" alt=""/>
                        </div>
                    </Col>
                    <Col xs={1} sm={1} md={2} lg={4}>
                        <div className="new-arrival-banner"> 
                            <div className="new-arrival-banner-heading">
                                #New Arrivals
                            </div>
                            <div className="new-arrival-banner-description">
                                <p>Explore our new trend collection of effortlessly elegant dresses. From flowing silhouettes to tailored designs, each piece embodies grace and versatility</p>
                            </div>
                            <div className="new-arrivals-banner-button">
                                <Button variant="dark" onClick={shopnowbuttonhandler}>Shop Now</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NewArrivals;