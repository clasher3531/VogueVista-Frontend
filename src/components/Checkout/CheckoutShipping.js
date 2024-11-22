import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { setBasketShippingAddress } from "../../helpers/basketHelper";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../../Context/BasketContext";
const emailRegex = /[A-Za-z0-9._%+]+@[a-z0-9A-Z]+\.[a-z]{2,}$/;

function CheckoutShipping(props) {
  const navigate = useNavigate();
  const { basketData, setBasketData } = useContext(BasketContext);
  const [validated, setValidated] = React.useState(false);
  const [shippingAddress, setShippingAddress] = React.useState({});
  React.useEffect(
    function () {
      setShippingAddress(basketData.shippingAddress);
    },
    [basketData.shippingAddress]
  );
  const handleSubmit = async (event) => {
    const form = event.target;
    event.preventDefault();
    var isFormValid = true;
    var isEmailValid = emailRegex.test(props.emailAddress);
    if (!isEmailValid) {
      props.setValidEmailAddress(false);
      event.stopPropagation();
      isFormValid = false;
    }
    if (form.checkValidity() === false) {
      event.stopPropagation();
      isFormValid = false;
      setValidated(true);
    }
    var formData = {
      title: form.title.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      address1: form.address1.value,
      address2: form.address2.value,
      city: form.city.value,
      state: form.state.value,
      zip: form.zip.value,
      phone: form.phone.value,
    };
    if (isFormValid) {
      setValidated(false);
      var basketResponse = await setBasketShippingAddress(
        formData,
        props.emailAddress
      );
      if (!basketResponse.error) {
        setBasketData(basketResponse.basket);
        navigate("/checkout/payment");
      }
    }
  };
  const inputChangeHandler = function (event, fieldName) {
    var fieldValue = event.target.value;
    let data = Object.assign({}, shippingAddress);
    data[fieldName] = fieldValue;
    setShippingAddress(data);
  };
  const genderChangeHandler = (event) => inputChangeHandler(event, "title");
  const firstNameChangeHandler = (event) =>
    inputChangeHandler(event, "firstName");
  const lastNameChangeHandler = (event) =>
    inputChangeHandler(event, "lastName");
  const address1ChangeHandler = (event) =>
    inputChangeHandler(event, "address1");
  const address2ChangeHandler = (event) =>
    inputChangeHandler(event, "address2");
  const stateChangeHandler = (event) => inputChangeHandler(event, "state");
  const cityChangeHandler = (event) => inputChangeHandler(event, "city");
  const zipChangeHandler = (event) => inputChangeHandler(event, "zip");
  const phoneNumberChangeHandler = (event) =>
    inputChangeHandler(event, "phone");
  return (
    <div className="checkout-shipping">
      <h5>SHIPPING ADDRESS</h5>
      <Form
        className="shipping-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridGender">
            <Form.Label>Title</Form.Label>
            <Form.Select
              id="title"
              required
              name="title"
              value={
                shippingAddress && shippingAddress.title
                  ? shippingAddress.title
                  : ""
              }
              onChange={genderChangeHandler}
            >
              <option value="">None</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Mx">Mx</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Title field is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              required
              name="firstName"
              value={
                shippingAddress && shippingAddress.firstName
                  ? shippingAddress.firstName
                  : ""
              }
              onChange={firstNameChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              First Name field is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              required
              name="lastName"
              value={
                shippingAddress && shippingAddress.lastName
                  ? shippingAddress.lastName
                  : ""
              }
              onChange={lastNameChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Last Name field is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            required
            name="address1"
            value={
              shippingAddress && shippingAddress.address1
                ? shippingAddress.address1
                : ""
            }
            onChange={address1ChangeHandler}
          />
          <Form.Control.Feedback type="invalid">
            Address Line 1 field is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            name="address2"
            value={
              shippingAddress && shippingAddress.address2
                ? shippingAddress.address2
                : ""
            }
            onChange={address2ChangeHandler}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              name="city"
              value={
                shippingAddress && shippingAddress.city
                  ? shippingAddress.city
                  : ""
              }
              onChange={cityChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              City field is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              id="State"
              required
              name="state"
              value={
                shippingAddress && shippingAddress.state
                  ? shippingAddress.state
                  : ""
              }
              onChange={stateChangeHandler}
            >
              <option value="">None</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Tripura">Tripura</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Pondicherry">Pondicherry</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select state
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control
              required
              name="zip"
              value={
                shippingAddress && shippingAddress.zip
                  ? shippingAddress.zip
                  : ""
              }
              onChange={zipChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Pin Code is required
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb3">
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              required
              name="phone"
              value={
                shippingAddress && shippingAddress.phone
                  ? shippingAddress.phone
                  : ""
              }
              max={9999999999}
              onChange={phoneNumberChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Valid Phone Number
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          type="submit"
          hidden
          ref={props.shippingbuttonref}
        >
          Submit
        </Button>
      </Form>{" "}
      <hr></hr>
    </div>
  );
}

export default CheckoutShipping;
