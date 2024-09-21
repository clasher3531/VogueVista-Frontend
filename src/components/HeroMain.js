import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function HeroMain() {
    const navigate = useNavigate()
    function explorebuttonhandler() {
        navigate('/allProducts');
    }
    return (
        <div className="hero-main">
            <div className="heading-hero-main">
                <h2 className="tag-main">Unveiling Style, Redefining Elegance</h2>
                <Button className="button-explore" variant="dark" onClick={explorebuttonhandler}>Let's Explore</Button>
            </div>
        </div>
    )
}

export default HeroMain;