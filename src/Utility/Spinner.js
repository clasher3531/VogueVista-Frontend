import React from "react";
import { Spinner } from 'react-bootstrap';

function MySpinner() {
    return (
        <Spinner animation="border" 
        role="status" 
        style={{ width: '3rem', height: '3rem' }}>
        </Spinner>
    )
}

export default MySpinner;