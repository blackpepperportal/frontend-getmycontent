import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Container,
    Row,
    Col,
    InputGroup,
    Tabs,
    Tab,
    Dropdown,
    DropdownButton,
    Image,
    Badge,
    Media,
} from "react-bootstrap";
import SendTipModal from "../../helper/SendTipModal";
import AddFavModal from "../../helper/AddFavModal";

const FollowingActiveSec = (props) => {

    const [sendTip, setSendTip] = useState(false);

    const closeSendTipModal = () => {
      setSendTip(false);
    };

    const [addFav, setAddFav] = useState(false);

    const closeAddFavModal = () => {
        setAddFav(false);
      };

    return (
        <>
            <div
                role="tabpanel"
                className={
                    props.activeSec === "active-sec" ? "tab-pane fade in active" : "tab-pane fade"
                }
                id="Section1"
            >
                <div className="bookmarkes-list bookmarks-right-side">
                    <div className="pull-left">
                        <Link className="bookmarkes-list" to="#">
                            <span className="mr-2">5 </span> ACTIVE
                        </Link>
                    </div>
                    <div className="pull-right">
                        <Dropdown>
                            <Dropdown.Toggle
                                className="btn btn-default dropdown-toggle bookmarks-filter"
                                type="button"
                                id="dropdown-basic"
                            >
                                <Image src="assets/images/icons/sort.svg" className="svg-clone" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right model-filter-dropdown">
                                <Form action="#">
                                    <Media as="li">
                                        <a role="heading" className="dropdown-header">
                                            Subscription
                                        </a>
                                    </Media>
                                    <Media as="li">
                                        <a>
                                        {["radio"].map((type) => (
                                                <div key={`custom-inline-${type}`}>
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label="Recent"
                                                        type={type}
                                                        id={`custom-inline-${type}-1`}
                                                    />
                                                </div>
                                            ))}
                                        </a>
                                    </Media>
                                    <Media as="li">
                                        <a>
                                        {["radio"].map((type) => (
                                                <div key={`custom-inline-${type}`}>
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label="Name"
                                                        type={type}
                                                        id={`custom-inline-${type}-2`}
                                                    />
                                                </div>
                                            ))}
                                        </a>
                                    </Media>
                                </Form>
                                <Media as="li" className="divider"></Media>
                                <Form action="#">
                                    <Media as="li">
                                        <a role="heading" className="dropdown-header">

                                            Online Status
                                        </a>
                                    </Media>
                                    <Media as="li">
                                        <a>
                                            {["radio"].map((type) => (
                                                <div key={`custom-inline-${type}`}>
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label="Online"
                                                        type={type}
                                                        id={`custom-inline-${type}-3`}
                                                    />
                                                </div>
                                            ))}
                                        </a>
                                    </Media>
                                    <Media as="li">
                                        <a>
                                        {["radio"].map((type) => (
                                                <div key={`custom-inline-${type}`}>
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label="Online"
                                                        type={type}
                                                        id={`custom-inline-${type}-4`}
                                                    />
                                                </div>
                                            ))}
                                        </a>
                                    </Media>
                                    <Media as="li">
                                        <a>
                                        {["radio"].map((type) => (
                                                <div key={`custom-inline-${type}`}>
                                                    <Form.Check
                                                        custom
                                                        inline
                                                        label="Offline"
                                                        type={type}
                                                        id={`custom-inline-${type}-5`}
                                                    />
                                                </div>
                                            ))}
                                        </a>
                                    </Media>
                                </Form>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <Col sm="6" md={4} lg={4} xs="12">
                    <div className="follower-lists">
                        <div className="follower-subscription-lists">
                            <div className="follower-subscription-inner">
                                <Link to="user-profile.html">
                                    <div className="follower-wrapper">
                                        <img className="follower-cover" src="assets/images/b-2.jpg" />
                                    </div>
                                </Link>
                                <div className="follower-profile-header">
                                    <Link to="#">
                                        <span className="follower-profile-avatar">
                                            <Image src="assets/images/avatar/b-2.jpg" className="" />
                                        </span>
                                    </Link>
                                    <div className="follower-info">
                                        <div className="follower-profile-status">
                                            <div className="follower-status-text">
                                                Last seen
                                                            <span title="Oct 12, 1:33 pm">

                                                    2 hours ago
                                                </span>
                                            </div>
                                            <div className="follower-profile-toggle-dropdown">
                                                <Link to="#" className="btn dropdown-toggle btn-link">
                                                    <Image src="assets/images/icons/vertical-dots.svg" className="svg-clone vertical-dots" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="follower-wrapper-name">
                                            <div className="follower-profile-names">
                                                <div className="follower-name-row">
                                                    <Link to="user-profile.html">
                                                        <div className="follower-user-name">
                                                            🤍🦋Sarai Rollins🦋🤍
                                                                <Image src="assets/images/icons/verified.svg" className="svg-clone m-verified" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="follower-name-row">
                                                    <Link to="user-profile.html" className="g-user-realname__wrapper">
                                                        <div className="follower-user-id">
                                                            @sarairollins
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group-follower-btns">
                                                <Button type="button" className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip">
                                                    <Image src="assets/images/icons/share.svg" className="svg-clone" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-to-lists-button">
                                    <div className="swiper-favorite">
                                        <Link type="button" className="swiper-btn-fav" onClick={() => setAddFav(true)}>
                                            <Image src="assets/images/icons/star.svg" className="svg-clone my-p-icons" width="12" />
                                                Add to favorites and other lists
                                        </Link>
                                    </div>
                                </div>
                                <div className="lists-button-group post-icons">
                                    <Button type="button" className="g-btn m-rounded m-border m-profile m-with-icon"onClick={() => setSendTip(true)}>
                                        <Image src="assets/images/icons/tip.svg" className="svg-clone" />
                                        <span className="b-btn-text">Tip</span>
                                    </Button>
                                </div>
                                <div className="lists-button-group">
                                    <Link type="button" className="g-btn m-rounded m-border m-profile m-with-icon">
                                        <Image src="assets/images/icons/subscribe.svg" className="svg-clone" />
                                        <span className="b-btn-text">
                                            Subscribed for free
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md={4} lg={4} xs="12">
                    <div className="follower-lists">
                        <div className="follower-subscription-lists">
                            <div className="follower-subscription-inner">
                                <Link to="user-profile.html">
                                    <div className="follower-wrapper">
                                        <img className="follower-cover" src="assets/images/b-5.jpg" />
                                    </div>
                                </Link>
                                <div className="follower-profile-header">
                                    <Link to="#">
                                        <span className="follower-profile-avatar">
                                            <Image src="assets/images/avatar/b-5.jpg" className="" />
                                        </span>
                                    </Link>
                                    <div className="follower-info">
                                        <div className="follower-profile-status">
                                            <div className="follower-status-text">
                                                Last seen
                                                            <span title="Oct 12, 1:33 pm">

                                                    2 hours ago
                                                </span>
                                            </div>
                                            <div className="follower-profile-toggle-dropdown">
                                                <Link to="#" className="btn dropdown-toggle btn-link">
                                                    <Image src="assets/images/icons/vertical-dots.svg" className="svg-clone vertical-dots" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="follower-wrapper-name">
                                            <div className="follower-profile-names">
                                                <div className="follower-name-row">
                                                    <Link to="user-profile.html">
                                                        <div className="follower-user-name">
                                                            🤍🦋Sarai Rollins🦋🤍
                                                                <Image src="assets/images/icons/verified.svg" className="svg-clone m-verified" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="follower-name-row">
                                                    <Link to="user-profile.html" className="g-user-realname__wrapper">
                                                        <div className="follower-user-id">
                                                            @sarairollins
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group-follower-btns">
                                                <Button type="button" className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip">
                                                    <Image src="assets/images/icons/share.svg" className="svg-clone" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-to-lists-button">
                                    <div className="swiper-favorite">
                                        <Link type="button" className="swiper-btn-fav" onClick={() => setAddFav(true)}>
                                            <Image src="assets/images/icons/star.svg" className="svg-clone my-p-icons" width="12" />
                                                Add to favorites and other lists
                                        </Link>
                                    </div>
                                </div>
                                <div className="lists-button-group post-icons">
                                    <Button type="button" className="g-btn m-rounded m-border m-profile m-with-icon"onClick={() => setSendTip(true)}>
                                        <Image src="assets/images/icons/tip.svg" className="svg-clone" />
                                        <span className="b-btn-text">Tip</span>
                                    </Button>
                                </div>
                                <div className="lists-button-group">
                                    <Link type="button" className="g-btn m-rounded m-border m-profile m-with-icon">
                                        <Image src="assets/images/icons/subscribe.svg" className="svg-clone" />
                                        <span className="b-btn-text">
                                            Subscribed for free
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm="6" md={4} lg={4} xs="12">
                    <div className="follower-lists">
                        <div className="follower-subscription-lists">
                            <div className="follower-subscription-inner">
                                <Link to="user-profile.html">
                                    <div className="follower-wrapper">
                                        <img className="follower-cover" src="assets/images/b-4.jpg" />
                                    </div>
                                </Link>
                                <div className="follower-profile-header">
                                    <Link to="#">
                                        <span className="follower-profile-avatar">
                                            <Image src="assets/images/avatar/b-4.jpg" className="" />
                                        </span>
                                    </Link>
                                    <div className="follower-info">
                                        <div className="follower-profile-status">
                                            <div className="follower-status-text">
                                                Last seen
                                                            <span title="Oct 12, 1:33 pm">

                                                    2 hours ago
                                                </span>
                                            </div>
                                            <div className="follower-profile-toggle-dropdown">
                                                <Link to="#" className="btn dropdown-toggle btn-link">
                                                    <Image src="assets/images/icons/vertical-dots.svg" className="svg-clone vertical-dots" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="follower-wrapper-name">
                                            <div className="follower-profile-names">
                                                <div className="follower-name-row">
                                                    <Link to="user-profile.html">
                                                        <div className="follower-user-name">
                                                            🤍🦋Sarai Rollins🦋🤍
                                                                <Image src="assets/images/icons/verified.svg" className="svg-clone m-verified" />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="follower-name-row">
                                                    <Link to="user-profile.html" className="g-user-realname__wrapper">
                                                        <div className="follower-user-id">
                                                            @sarairollins
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="group-follower-btns">
                                                <Button type="button" className="g-btn m-rounded m-border m-icon m-icon-only m-colored has-tooltip">
                                                    <Image src="assets/images/icons/share.svg" className="svg-clone" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-to-lists-button">
                                    <div className="swiper-favorite">
                                        <Link type="button" className="swiper-btn-fav" onClick={() => setAddFav(true)}>
                                            <Image src="assets/images/icons/star.svg" className="svg-clone my-p-icons" width="12" />
                                                Add to favorites and other lists
                                        </Link>
                                    </div>
                                </div>
                                <div className="lists-button-group post-icons">
                                    <Button type="button" className="g-btn m-rounded m-border m-profile m-with-icon"onClick={() => setSendTip(true)}>
                                        <Image src="assets/images/icons/tip.svg" className="svg-clone" />
                                        <span className="b-btn-text">Tip</span>
                                    </Button>
                                </div>
                                <div className="lists-button-group">
                                    <Link type="button" className="g-btn m-rounded m-border m-profile m-with-icon">
                                        <Image src="assets/images/icons/subscribe.svg" className="svg-clone" />
                                        <span className="b-btn-text">
                                            Subscribed for free
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
            <AddFavModal addFav={addFav} closeAddFavModal={closeAddFavModal} />
            <SendTipModal sendTip={sendTip} closeSendTipModal={closeSendTipModal} />
        </>
    );
};

export default FollowingActiveSec;
