import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  FormGroup,
} from "react-bootstrap";
import "./DocumentUploadIndex.css";
import { connect } from "react-redux";
import {
  addKycDocumentStart,
  getKycDocumentStart,
} from "../../store/actions/KycDocumentAction";

import NoDataFound from "../NoDataFound/NoDataFound";

const DocumentUploadIndex = (props) => {
  useEffect(() => {
    props.dispatch(getKycDocumentStart());
  }, []);

  const [inputData, setInputData] = useState({});

  const [image, setImage] = useState({});

  const [uploadDocumentID, setUploadDocumentID] = useState(null);

  const handleChangeImage = (event, doc) => {
    if (event.currentTarget.type === "file") {
      setInputData({
        ...inputData,
        document_file: event.currentTarget.files[0],
        document_id: doc.document_id,
      });
      let reader = new FileReader();
      let file = event.currentTarget.files[0];

      reader.onloadend = () => {
        setImage({ ...image, [doc.document_id]: reader.result });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = (event, doc) => {
    event.preventDefault();
    setUploadDocumentID(doc.document_id);
    props.dispatch(addKycDocumentStart(inputData));
  };

  return (
    <>
      <div className="document-upload-sec">
        <Container>
          <h4 class="head-title">Upload Your Documents</h4>
          {props.kycDocDetails.loading ? (
            "Loading..."
          ) : props.kycDocDetails.data.documents.length > 0 ? (
            props.kycDocDetails.data.documents.map((doc) => (
              <>
                <div className="document-card">
                  <Row>
                    <Col sm={12} md={12}>
                      <div className="sub-heading">
                        <h4>{doc.name}</h4>
                        <p>{doc.description}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {doc.is_delete_edit_option ? (
                      <Col sm={12} md={6} xl={6} className="resp-mrg-btn-xs">
                        <div className="document-upload-box">
                          <Image src={doc.picture} className="doc-upload-img" />
                        </div>
                      </Col>
                    ) : (
                      ""
                    )}
                    <Col sm={12} md={6} xl={6}>
                      <FormGroup>
                        <Form.File
                          type="file"
                          id={doc.document_id}
                          name={doc.document_id}
                          onChange={(event) => handleChangeImage(event, doc)}
                        />

                        <Form.Label
                          htmlFor={doc.document_id}
                          className="document-upload-box-1"
                        >
                          <Image
                            src={
                              image[doc.document_id] !== undefined
                                ? image[doc.document_id]
                                : doc.user_document.document_file !== undefined
                                ? doc.user_document.document_file
                                : window.location.origin +
                                  "/assets/images/document-upload.svg"
                            }
                            className="doc-upload-img-1"
                          />
                          <br></br>
                          <p className="document-desc">{doc.user_document.document_file !== undefined
                            ? "Click here to reupload"
                            : null}</p>
                        </Form.Label>
                      </FormGroup>
                    </Col>
                  </Row>
                  {doc.is_delete_edit_option ? (
                    <Row>
                      <Col sm={12} md={12}>
                        <Button
                          className="receive-btn-blue"
                          onClick={(event) => handleSubmit(event, doc)}
                          disabled={
                            uploadDocumentID === doc.document_id ? true : false
                          }
                        >
                          {uploadDocumentID === doc.document_id
                            ? props.addKycDocInput.loadingButtonContent
                            : "Send for Approval"}
                        </Button>
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                </div>
                <div className="space-mg"></div>
              </>
            ))
          ) : (
            <NoDataFound></NoDataFound>
          )}
        </Container>
      </div>
    </>
  );
};

const mapStateToPros = (state) => ({
  kycDocDetails: state.kycDocument.kycDocDetails,
  addKycDocInput: state.kycDocument.addKycDocInput,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(DocumentUploadIndex);
