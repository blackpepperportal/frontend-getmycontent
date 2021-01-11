import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import "./BankingIndex.css";
import { getKycDocumentStart } from "../../../store/actions/KycDocumentAction";

const BankingIndex = (props) => {
  useEffect(() => {
    props.dispatch(getKycDocumentStart());
  }, []);

  return (
    <div className="banking-sec">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="banking-header">
              <div className="back-icon">
                {/* <Image
                  src="assets/images/icons/back.svg"
                  className="svg-clone"
                /> */}
                <span>Banking</span>
              </div>
              <div className="help-icon">
                <Image
                  src="assets/images/icons/help.svg"
                  className="svg-clone"
                />
              </div>
            </div>
            <div className="banking-body">
              <Form className="banking-personal-form">
                <h2 className="title">PERSONAL INFORMATION</h2>
                <h4>
                  Fill in your legal name, address and attach your goverment
                  issued picture ID
                </h4>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="fname" placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="lname" placeholder="Last Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="email"
                    value="United Kingdom"
                    placeholder=""
                  />
                  <Form.Text className="text-muted">
                    If you would like to change your country please contact{" "}
                    <Link to="#">customer support</Link>
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="address" placeholder="Your address" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="city" placeholder="Your city" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Postal/Zip</Form.Label>
                  <Form.Control type="pcode" placeholder="Postal/Zip" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Twitter <span>(optional)</span>
                  </Form.Label>
                  <Form.Control type="lname" placeholder="Your username" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Instagaram <span>(optional)</span>
                  </Form.Label>
                  <Form.Control type="lname" placeholder="Your username" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Website <span>(optional)</span>
                  </Form.Label>
                  <Form.Control type="lname" placeholder="Website" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Date Of Birth<span>(optional)</span>
                  </Form.Label>
                  <Form.Control type="dob" placeholder="Date of birth" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Document Type</Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                  >
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                </Form.Group>
                <Form.Row>
                  <Col sm={12}>
                    <Form.Group className="upload-btn-wrapper">
                      <Form.Label>Photo of Your ID</Form.Label>
                      <button className="btn-upload">Select File</button>
                      <Form.File
                        id="exampleFormControlFile1"
                        label=""
                        accept="image/*"
                      />
                      <Form.Text className="text-muted">
                        Please upload a photo of your picture ID Document (i.e.
                        Passport or Driving License)
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col sm={4}></Col>
                </Form.Row>
                <Form.Row>
                  <Col sm={12}>
                    <Form.Group className="upload-btn-wrapper">
                      <Form.Label>Photo of Holding Your Id</Form.Label>
                      <button className="btn-upload">Select File</button>
                      <Form.File
                        id="exampleFormControlFile1"
                        label=""
                        accept="image/*"
                      />
                      <Form.Text className="text-muted">
                        Please upload a photo of your picture ID Document (i.e.
                        a selfie ensuring your face is clearly visible)
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col sm={4}></Col>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    ID Expiration Date <span>optional</span>
                  </Form.Label>
                  <Form.Control
                    type="address"
                    placeholder="ID expiration date"
                  />
                </Form.Group>
                <Form.Group>
                  {["radio"].map((type) => (
                    <div key={`custom-inline-${type}`}>
                      <Form.Check
                        custom
                        inline
                        label="No expiration date"
                        type={type}
                        id={`custom-inline-${type}-1`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group>
                  <Form.Label className="mb-4 mt-2">
                    Explicity Content<span>(optional)</span>
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`custom-inline-${type}`}>
                      <Form.Check
                        custom
                        inline
                        label="Will you be posting sexually explicity / pornographic content"
                        type={type}
                        id={`custom-inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <div className="edit-save">
                  <Button className="save-btn"> Send For Approval </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToPros = (state) => ({
  kycDocDetails: state.kycDocument.kycDocDetails,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(BankingIndex);
