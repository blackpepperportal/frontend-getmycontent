import React from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import "./UploadProfilePicture.css";

const UploadProfilePicture = () => {
  return (
    <>
      <div className="document-upload-sec">
        <Container>
          <h4 className="head-title">Upload Profile Picture</h4>
          <div className="upload-profile-picture-card">
            <Row>
                <Col md={6}>
                    <div className="upload-profile-picture-sec">
                        <Form className="upload-profile-img-form">
                            <Form.Group>
                                <input type="file" id="file" />
                                <Form.Label for="file">
                                    <Image
                                        src={
                                        window.location.origin +
                                        "/assets/images/upload-profile-img.svg"
                                        }
                                        className="upload-profile-picture-img"
                                    />
                                    <div className="edit-icon-sec">
                                        <i class="fas fa-upload"></i>
                                    </div>
                                </Form.Label>
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="upload-profile-info">
                        <h2 className="title">
                            Profile Photo
                        </h2>
                        <p className="desc">It’s not much fun to host a landscape! Be sure to use a photo that clearly shows your 
                        face and doesn’t include any personal or sensitive info you’d rather not have hosts or guests see.
                        </p>
                        <Button className="upload-profile-img-btn btn-block">Submit</Button>
                    </div>
                </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UploadProfilePicture;
