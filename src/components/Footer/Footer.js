import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, Row } from "react-bootstrap";
import facebookLogo from "./footer-icons/facebook.svg";
import instagramLogo from "./footer-icons/square-instagram.svg";
import youtubeIcon from "./footer-icons/youtube.svg";
import pinterestIcon from "./footer-icons/square-pinterest.svg";
import twitterIcon from "./footer-icons/square-x-twitter.svg";
import locationIcon from "./footer-icons/location-dot-solid.svg";
import "../../css/Footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <h3 className="footer-logo">VogueVista</h3>
      <div className="footer-info">
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <Row>
              <Col>
                <ul>
                  <li>Career</li>
                  <li>Our Shops</li>
                  <li>Delivery Service</li>
                  <li>News</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Customer Care</li>
                  <li>Login/SignUp</li>
                  <li>Alumini</li>
                  <li>VogueVista India</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <Row>
              <div className="footer-email-subscribe">
                <h6>Get the latest voguevista news</h6>
                <InputGroup className="mb-3">
                  <Form.Control placeholder="Your email here" />
                  <Button variant="dark" id="button-addon2">
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </Row>
            <Row>
              <Col>
                <img src={facebookLogo} alt="" width="20px" height="20px" />
              </Col>
              <Col>
                <img src={instagramLogo} alt="" width="20px" height="20px" />
              </Col>
              <Col>
                <img src={twitterIcon} alt="" width="20px" height="20px" />
              </Col>
              <Col>
                <img src={pinterestIcon} alt="" width="20px" height="20px" />
              </Col>
              <Col>
                <img src={youtubeIcon} alt="" width="20px" height="20px" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <hr />
          <div className="footer-copyright-section">
            <Row>
              <Col xs={12} sm={12} md={6} lg={7} xl={8} xxl={9}>
                <img src={locationIcon} alt="" width="20px" height="20px"></img>
                &nbsp;India
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={5}
                xl={4}
                xxl={3}
                className="copyright-text"
              >
                &copy;2023 VogueVista, LLC. All Rights Reserved
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
