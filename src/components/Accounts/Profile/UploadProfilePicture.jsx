import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import "./UploadProfilePicture.css";

import {
  editUserDetails,
  fetchUserDetailsStart,
  updateUserDetailsStart,
} from "../../../store/actions/UserAction";

const UploadProfilePicture = (props) => {

  const [profileInputData, setProfileInputData] = useState({});

  const [image, setImage] = useState({
    picture: "",
    cover: "",
  });

  useEffect(() => {
    
  }, []);

  const handleChangeImage = (event) => {
    if (event.currentTarget.type === "file") {
      setProfileInputData({
        ...profileInputData,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
      let reader = new FileReader();
      let file = event.currentTarget.files[0];

      if (event.currentTarget.name === "picture") {
        reader.onloadend = () => {
          setImage({ ...image, picture: reader.result });
        };
      }

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(profileInputData).length > 0)
      props.dispatch(updateUserDetailsStart(profileInputData));
    else props.dispatch(updateUserDetailsStart());
  };

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
                                <Form.Control
                                  className="hidden-input"
                                  id="changePicture"
                                  type="file"
                                  accept="image/*"
                                  name="picture"
                                  onChange={handleChangeImage}
                                />
                                <Form.Label for="file"
                                  className="hidden-input"
                                  for="changePicture"
                                  type="file"
                                  title="Change picture">
                                    <Image
                                      src={
                                        image.picture === ""
                                          ? window.location.origin +
                                          "/assets/images/upload-profile-img.svg"
                                          : image.picture
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
                        <Button
                          className="upload-profile-img-btn btn-block"
                          onClick={handleSubmit}
                        >
                          Submit
                        </Button>
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
