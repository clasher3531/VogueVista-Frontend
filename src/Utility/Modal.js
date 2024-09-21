import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function MyModal(props) {
    const navigate = useNavigate();
    function buttonClickHandler() {
      navigate(props.navigatelink)
    }
    return (
      <div className="Modal">
        <Modal {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{props.modalheading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{props.modalsubheading}</h4>
            {props.modaldescription}
          </Modal.Body>
          <Modal.Footer><Button variant="dark" onClick={buttonClickHandler}>{props.modalbuttontext}</Button></Modal.Footer>
        </Modal>
      </div>
    );
}

export default MyModal;