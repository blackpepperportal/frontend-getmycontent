import React from "react";
import { Row, Col, Container, Image, Media, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryListIndex = () => {
    return (
        <>
            <div className="category-content-list">
                <Container>
                    <div className="category-content-list-sec">
                        <h4 className="title">
                            Gaming
                        </h4>
                    </div>
                    <Row>
                        <Col md={12}>
                            <ul className="list-unstyled category-content-info">
                                <Media as="li">
                                    <Link to="#">
                                        <div className="category-list-info">
                                            <div className="flex-content">
                                                <div className="category-content-img-sec">
                                                    <Image
                                                    src="assets/images/harish-jee.png"
                                                    className="category-content-img"
                                                    />
                                                </div>
                                                <div className="category-info-details">
                                                    <h5>Beno Darry</h5>
                                                    <p className="text-muted f-14">Followers: <strong>20</strong></p>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="follow-btn">
                                                <i class="fas fa-user-plus mr-2"></i> Follow
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                </Media>
                                <Media as="li">
                                    <Link to="#">
                                        <div className="category-list-info">
                                            <div className="flex-content">
                                                <div className="category-content-img-sec">
                                                    <Image
                                                    src="assets/images/harish-jee.png"
                                                    className="category-content-img"
                                                    />
                                                </div>
                                                <div className="category-info-details">
                                                    <h5>Jerif Daniel</h5>
                                                    <p className="text-muted f-14">Followers: <strong>20</strong></p>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="follow-btn">
                                                <i class="fas fa-user-plus mr-2"></i> Follow
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                </Media>
                                <Media as="li">
                                    <Link to="#">
                                        <div className="category-list-info">
                                            <div className="flex-content">
                                                <div className="category-content-img-sec">
                                                    <Image
                                                    src="assets/images/harish-jee.png"
                                                    className="category-content-img"
                                                    />
                                                </div>
                                                <div className="category-info-details">
                                                    <h5>Jefrin Deena</h5>
                                                    <p className="text-muted f-14">Followers: <strong>20</strong></p>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="follow-btn">
                                                <i class="fas fa-user-plus mr-2"></i> Follow
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                </Media>
                                <Media as="li">
                                    <Link to="#">
                                        <div className="category-list-info">
                                            <div className="flex-content">
                                                <div className="category-content-img-sec">
                                                    <Image
                                                    src="assets/images/harish-jee.png"
                                                    className="category-content-img"
                                                    />
                                                </div>
                                                <div className="category-info-details">
                                                    <h5>Haniel Daniel</h5>
                                                    <p className="text-muted f-14">Followers: <strong>20</strong></p>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="follow-btn">
                                                <i class="fas fa-user-plus mr-2"></i> Follow
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                </Media>
                                <Media as="li">
                                    <Link to="#">
                                        <div className="category-list-info">
                                            <div className="flex-content">
                                                <div className="category-content-img-sec">
                                                    <Image
                                                    src="assets/images/harish-jee.png"
                                                    className="category-content-img"
                                                    />
                                                </div>
                                                <div className="category-info-details">
                                                    <h5>Suderson</h5>
                                                    <p className="text-muted f-14">Followers: <strong>20</strong></p>
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="follow-btn">
                                                <i class="fas fa-user-plus mr-2"></i> Follow
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                </Media>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default CategoryListIndex;
