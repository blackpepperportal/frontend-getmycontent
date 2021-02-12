import React, { useState } from "react";
import { connect } from "react-redux";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { Container, Image, Row, Col, Figure } from "react-bootstrap";
import SignInModal from "../LandingPageIndex/Auth/SignInModal";
import SignUpModal from "../LandingPageIndex/Auth/SignUpModal";

const NewLandingPage = (props) => {

    const [signInModal, setSignInModal] = useState(false);

    const closeSignInModal = () => {
        setSignInModal(false);
    };

    const [signUpModal, setSignUpModal] = useState(false);

    const closeSignUpModal = () => {
        setSignUpModal(false);
    };

    return (
        <>
            <div className="landing-page-sec">
                <section className="banner-sec">
                    <Container>
                        <Image
                            src={
                                window.location.origin +
                                "/assets/images/banner-mobile.png"
                            }
                            alt=""
                            className="baner-outer"
                        />
                        <Figure className="figure highlight-background highlight-background--lean-right">
                            <Image
                                src={
                                    window.location.origin +
                                    "/assets/images/shape-bg.svg"
                                }
                                alt=""
                                className="img-fluid"
                            />
                        </Figure>
                        <Row>
                            <Col md={12} xl={6}>
                                <div className="banner-content-sec">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/get-my-content-landing.png"
                                        }
                                        alt=""
                                        className="landing-logo"
                                    />
                                    <h2 className="title">Get My Content assists content creators to  monetise their social content</h2>
                                    <p className="desc">Join Get My Content the first app that bridges the gap between social network and monetisation platforms.</p>
                                    <div className="banner-button-sec">
                                        <Link to="#" className="auth-btn margin-right-sm"
                                        onClick={() => setSignUpModal(true)}
                                        >Join Us</Link>
                                        <Link to="#" className="auth-btn"
                                        onClick={() => setSignInModal(true)}
                                        >Sign In</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} xl={6} className="text-center">
                                <Image
                                    src={
                                        window.location.origin +
                                        "/assets/images/girl-mobile.png"
                                    }
                                    alt=""
                                    className="girl-mobile-img"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="intro-sec">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2 className="section-title text-center">
                                Who Is 
                                <span className="ml-2">Get My Content?</span>
                                </h2>
                                <p>Get My Content is a new subscription-based social network that helps users to monetise their content and earn regular revenue. Users are able to grow their following organically and via existing social media accounts. Creators are able to share videos/photos with their supporters whilst getting paid. The only restriction content creators have is that anything posted must not be adult content.
                                </p>
                                <p>We expect creators to come from all segments of life whether it being fitness experts, musicians, dancers, models, influencers.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="work-flow-sec">
                    <Container>
                        <Row>
                            <Col md={12} xl={8} className="col-md-offset-2">
                                <h2 className="section-title text-center mb-30">How Does
                                <span> Get My Content Work</span>
                                </h2>
                                <div className="title-bdr">
                                    <div className="left-bdr"></div>
                                    <div className="right-bdr"></div>
                                </div>
                                <p className="heading-desc text-center">The workflow of Get My Content is very simple and has the following features</p>
                            </Col>
                        </Row>
                        <Row className="md-flex">
                            <Col md={12} lg={7}>
                                <div className="work-process-wrap">
                                    <div className="process-single-item">
                                        <div className="process-img-item left-shape">
                                            <div className="d-flex align-items-center">
                                                <div className="process-img mr-4">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/register.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="process-content text-left">
                                                    <h5>Quick onboarding</h5>
                                                    <p>The platform allows users to sign up or log in via any one of the multiple registration processes available.</p>
                                                </div>
                                            </div>
                                            <svg x="0px" y="0px" width="312px" height="130px">
                                                <path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300" stroke-dashoffset="0" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"></path>
                                                <path className="dashed2" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="process-single-item">
                                        <div className="process-img-item right-shape">
                                            <div className="d-flex align-items-center">
                                                <div className="process-img ml-4">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/search.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="process-content text-right">
                                                    <h5> Browse content creators</h5>
                                                    <p>Users can use the extensive search feature to explore the creator profiles on the app and pick the one they are looking for. Creators can be found by user name or categorically by type of content posted.</p>
                                                </div>
                                            </div>
                                            <svg x="0px" y="0px" width="312px" height="130px">
                                                <path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300" stroke-dashoffset="0" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                                                <path className="dashed2" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="process-single-item">
                                        <div className="process-img-item fit-img left-shape mb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="process-img mr-4">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/video.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="process-content text-left">
                                                    <h5>Request for photos / videos / calls</h5>
                                                    <p>Based on the profiles of content creators, users can request for videos or photos. They can also request for personal interaction over video calls.</p>
                                                    <svg x="0px" y="0px" width="312px" height="130px">
                                                        <path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300" stroke-dashoffset="0" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"></path>
                                                        <path className="dashed2" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="process-single-item">
                                        <div className="process-img-item right-shape">
                                            <div className="d-flex align-items-center">
                                                <div className="process-img ml-4">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/payments.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="process-content text-right">
                                                    <h5> Process payments</h5>
                                                    <p>The requests are forwarded to the respective creators right after users pay for them. Multiple payment options are integrated into the app for user convenience.</p>
                                                </div>
                                            </div>
                                            <svg x="0px" y="0px" width="312px" height="130px">
                                                <path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300" stroke-dashoffset="0" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                                                <path className="dashed2" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="process-single-item">
                                        <div className="process-img-item left-shape mb-0">
                                            <div className="d-flex align-items-center">
                                                <div className="process-img mr-4">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/share.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="process-content text-left">
                                                    <h5> Fulfilling requests</h5>
                                                    <p>Once the creators are notified of the requests, they will take a specified time to create the content and share it with their followers. If it’s video call requests, it is also fulfilled within the given period.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} lg={5}>
                                <div className="mock-img">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/screen-double.png"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/screen-double-1.png"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <div className="circle-bg grdnt-yellow"></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="user-feature-sec">
                    <Container>
                        <Row>
                            <Col md={12} xl={8} className="col-md-offset-2">
                                <h2 className="section-title text-center mb-30">Features For
                                <span className="ml-2">The Content Creators</span>
                                </h2>
                                <div className="title-bdr">
                                    <div className="left-bdr"></div>
                                    <div className="right-bdr"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="md-flex">
                            <Col md={12} xl={6}>
                                <div className="mock-img">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/screen-4.png"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <div className="circle-bg grdnt-yellow"></div>
                                </div>
                            </Col>
                            <Col md={12} xl={6}>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/user-profile.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">User profiles</Link>
                                        </h4>
                                        <p className="text">Users can swiftly register with the app and create their profiles with their basic / contact details</p>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/search.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">Discover Creator Profiles</Link>
                                        </h4>
                                        <p className="text">The app lets users search for specific creator profiles. They can also browse through the available profiles and choose the one that interests them.</p>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/chat.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">Private Chats</Link>
                                        </h4>
                                        <p className="text">The app lets users search for specific creator profiles. They can also browse through the available profiles and choose the one that interests them.</p>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/buy.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">Buy Content</Link>
                                        </h4>
                                        <p className="text">Users can request for personalized content like birthday wishes / video shoutouts. They can also purchase the digital content already available on the creator profiles</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="md-flex">
                            <Col md={12} xl={6}>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/cart.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">Shop Merchandise</Link>
                                        </h4>
                                        <p className="text">Users can shop the merchandise promoted by their favorite creators or the products they like to invest in.</p>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/suggestion.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">Custom Suggestions</Link>
                                        </h4>
                                        <p className="text">Based on the browsing history of users, custom recommendations can be shared to expand their areas of interest.</p>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/pop-up.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">Pop-Up Alerts</Link>
                                        </h4>
                                        <p className="text">Users will be notified of their request status and other associated details via in-app push alerts.</p>
                                    </div>
                                </div>
                                <div className="services-block-four">
                                    <div className="inner-box">
                                        <div className="icon-img-box">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/multi-payment.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <h4>
                                            <Link to="#">Multiple Payments</Link>
                                        </h4>
                                        <p className="text">Several payment options are included in the payment system of the app to make the entire process simple and efficient.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={12} xl={6}>
                                <div className="mock-img">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/screen-5.png"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <div className="circle-bg grdnt-yellow"></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="content-feature-sec">
                    <Container>
                        <Row>
                            <Col md={12} xl={8} className="col-md-offset-2">
                                <h2 className="section-title text-center mb-30">Features for
                                <span className="ml-2">Content Creators</span>
                                </h2>
                                <div className="title-bdr">
                                    <div className="left-bdr"></div>
                                    <div className="right-bdr"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="md-flex">
                            <Col md={12} lg={4} className="padding-top-lg">
                                <Row>
                                    <Col md={12}>
                                        <div className="features-2 d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/profile.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="icon-text">
                                                <h5 className="mb-2">Creator profiles</h5>
                                                <p>Content creators signed up with the platform can set up their profiles with the details of the content they create.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="features-2 d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/subscription-plan.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="icon-text">
                                                <h5 className="mb-2">Subscription plans</h5>
                                                <p>Creators can create a custom subscription plan so their followers can subscribe to their profiles and access their content limitlessly.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="features-2 d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/video-share.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="icon-text">
                                                <h5 className="mb-2">Share videos / photos</h5>
                                                <p>Apart from subscriptions, creators can share videos and photos as per users’ requests.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} lg={4}>
                                <div className="mock-img">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/screen-6.png"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </Col>
                            <Col md={12} lg={4} className="padding-top-lg">
                                <Row>
                                    <Col md={12}>
                                        <div className="features-2 d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/receive-payments.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="icon-text">
                                                <h5 className="mb-2">Receive payments</h5>
                                                <p>Creators can receive payments for the completed requests after the commission deduction by the admin.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="features-2 d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/video-call-1.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="icon-text">
                                                <h5 className="mb-2">User interaction</h5>
                                                <p>Creators can socialize with their followers over private chats or 1-on-1 video calls. Another excellent feature to generate income!</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12}>
                                        <div className="features-2 d-flex align-items-start mb-sm-0 mb-md-3 mb-lg-3">
                                            <Image
                                                src={
                                                    window.location.origin +
                                                    "/assets/images/status.svg"
                                                }
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="icon-text">
                                                <h5 className="mb-2">Request status</h5>
                                                <p>Creators can view the completed or ongoing status of all requests received from their audience base.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <section className="admin-feature-sec">
                    <Container>
                        <Row>
                            <Col md={12} xl={8} className="col-md-offset-2">
                                <h2 className="section-title text-center mb-30">Features of
                                <span className="ml-2">Admin Panel</span>
                                </h2>
                                <div className="title-bdr">
                                    <div className="left-bdr"></div>
                                    <div className="right-bdr"></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/manage-user.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">Manage user profiles</h5>
                                    <p>The admin can access the profiles of all users registered with the platform. They can block or delete profiles that do not comply with the app’s regulations.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/manage-creator.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">Manage creator profiles</h5>
                                    <p>The admin can view the creators’ requests to join the platform and accept / reject them. Upon accepting, the admin can manage all their details.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/percentage.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">Set commission percentage</h5>
                                    <p>The admin has the freedom to select the commission percentage for the platform, considering various parameters.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/payment-system.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">Manage payment system</h5>
                                    <p>The admin can integrate multiple payment gateways into the app to empower users to pay as per their convenience.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/e-commerce.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">Manage merchandise</h5>
                                    <p>If the admin plans to set up an e-commerce store, he/she can do so effortlessly with this feature.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/view-payment.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">View payments</h5>
                                    <p>All payment details processed are presented here with a detailed graph for the admin's view.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/ads.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">Manage advertising</h5>
                                    <p>The admin can earn revenue by boosting other businesses. They can post their promotional ads on the platform.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                            <Col md={6} sm={12} xs={12} xl={4}>
                                <div className="single-app-features text-center">
                                    <Image
                                        src={
                                            window.location.origin +
                                            "/assets/images/alert.svg"
                                        }
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="app-feature-item3822d0f">Manage alerts</h5>
                                    <p>The pop-up notifications shared with the app users can readily be managed by the admin.</p>
                                    <div className="btm-line"></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> */}
                <section className="premium-feature-sec">
                    <Container>
                        <Row>
                            <Col md={12} xl={8} className="col-md-offset-2">
                                <h2 className="section-title text-center mb-30">Premium Features Of
                                <span className="ml-2">Get My Content</span>
                                </h2>
                                <div className="title-bdr">
                                    <div className="left-bdr"></div>
                                    <div className="right-bdr"></div>
                                </div>
                                {/* <p className="heading-desc">Scale Big By Integrating Multiple Revenue Streams Into change to</p> */}
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={6} sm={6} xl={4}>
                                <div className="premium-item">
                                    <div className="icon-bg-lg bg-rad-anim">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/fees.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="spce"></div>
                                    <h5>Tipping</h5>
                                    <p>Followers who are crazy about their favorite creators can tip them regularly or when they feel like. The amount they tip is completely their choice.</p>
                                </div>
                            </Col>
                            <Col md={6} sm={6} xl={4}>
                                <div className="premium-item">
                                    <div className="icon-bg-lg bg-rad-anim">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/message.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="spce"></div>
                                    <h5>PPV messaging</h5>
                                    <p>Creators can share their content and set a price tag for them. They will start receiving payments based on the number of fans who pay to view the content</p>
                                </div>
                            </Col>
                            <Col md={6} sm={6} xl={4}>
                                <div className="premium-item">
                                    <div className="icon-bg-lg bg-rad-anim">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/schedule.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="spce"></div>
                                    <h5>Post scheduling</h5>
                                    <p>To make the job of creators effortless, Get My Content allows creators to schedule their posts based on their time zones and convenience. They can create a queue of content for a week or month as they wish.</p>
                                </div>
                            </Col>
                            <Col md={6} sm={6} xl={4} className="col-md-offset-2">
                                <div className="premium-item">
                                    <div className="icon-bg-lg bg-rad-anim">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/live.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="spce"></div>
                                    <h5>Live streaming</h5>
                                    <p>Content creators can go on live calls to interact with their subscribers or specific followers. These live-streamed videos can be recorded and shared on their profiles as well.</p>
                                </div>
                            </Col>
                            <Col md={6} sm={6} xl={4}>
                                <div className="premium-item">
                                    <div className="icon-bg-lg bg-rad-anim">
                                        <Image
                                            src={
                                                window.location.origin +
                                                "/assets/images/social-media.svg"
                                            }
                                            alt=""
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="spce"></div>
                                    <h5>Linking social media</h5>
                                    <p>Creators can connect their accounts from other social media platforms to their profiles. It is a great way to increase followers and site traffic.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="revenue-sec">
                    <Container>
                        <Row>
                            <Col md={12} xl={8} className="col-md-offset-2">
                                <h2 className="section-title text-center mb-30"> How Can I Generate Revenue with
                                <span className="ml-2">Get My Content?</span>
                                </h2>
                                <div className="title-bdr">
                                    <div className="left-bdr"></div>
                                    <div className="right-bdr"></div>
                                </div>
                                <p className="heading-desc text-center">There are several ways to generate revenue with Get My Content.  You can include one stream or multiple income streams concurrently to earn high profits in a short span. Below are the revenue streams worth considering to include in your application.</p>
                            </Col>
                            <Col md={12} className="mt-4">
                                <Row>
                                    <Col md={6} sm={6} xl={4}>
                                        <div className="appseo-service-box position-relative">
                                            <div className="appseo-service-icon-text position-relative">
                                                <div className="appseo-service-icon position-relative text-center">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/fees.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="appseo-service-text appseo-headline pera-content text-center">
                                                    <h3>Subscription fee</h3>
                                                    <p>Set a range of subscription packages for users to choose from. The subscriptions can be made available for a weekly, monthly, or yearly basis.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6} xl={4}>
                                        <div className="appseo-service-box position-relative">
                                            <div className="appseo-service-icon-text position-relative">
                                                <div className="appseo-service-icon position-relative text-center">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/ppv.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="appseo-service-text appseo-headline pera-content text-center">
                                                    <h3>PPV Model</h3>
                                                    <p>Users can send messages to their idols for free. However, they can view the replies from them only after paying a certain amount. This revenue stream is based on the Pay Per View (PPV) model.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={6} xl={4}>
                                        <div className="appseo-service-box position-relative">
                                            <div className="appseo-service-icon-text position-relative">
                                                <div className="appseo-service-icon position-relative text-center">
                                                    <Image
                                                        src={
                                                            window.location.origin +
                                                            "/assets/images/comission.svg"
                                                        }
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="appseo-service-text appseo-headline pera-content text-center">
                                                    <h3>Commission fee</h3>
                                                    <p>Create income for every photo or video shared with the followers via your social media subscription platform.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            <SignInModal signInModal={signInModal} closeSignInModal={closeSignInModal} />
            <SignUpModal signUpModal={signUpModal} closeSignUpModal={closeSignUpModal} />
        </>
    );
};

const mapStateToPros = (state) => ({
                cards: state.cards.cardDetails,
});

function mapDispatchToProps(dispatch) {
    return { dispatch};
}

export default connect(mapStateToPros, mapDispatchToProps)(NewLandingPage);
