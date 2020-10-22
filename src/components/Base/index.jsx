import React, { Component } from "react";
import { createBrowserHistory as createHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Logout from "../Auth/Logout";
import MainLayout from "../layouts/MainLayout";
import LoginIndex from "../Auth/LoginIndex";
import AuthLayout from "../layouts/AuthLayout";
import RegisterIndex from "../Auth/RegisterIndex";
import ForgotPassword from "../Auth/ForgotPassword";
import CardsList from "../Accounts/Cards/CardsList";
import EditProfile from "../Accounts/Profile/EditProfile";
import DeleteAccountIndex from "../Accounts/DeleteAccount/DeleteAccountIndex";
import ChangePasswordIndex from "../Accounts/ChangePassword/ChangePasswordIndex";
import ProfileIndex from "../Accounts/Profile/ProfileIndex";
import NotFoundIndex from "../NotFound/NotFoundIndex";
import { Helmet } from "react-helmet";
import configuration from "react-global-configuration";
import { apiConstants } from "../Constant/constants";
import LandingPageLoader from "../Loader/LandingPageLoader";
import EmptyLayout from "../layouts/EmptyLayout";
import LandingPageIndex from "../LandingPageIndex/LandingPageIndex";
import HomePageIndex from "../Home/HomePageIndex";
import MessageIndex from "../Messages/MessageIndex";
import BookmarksIndex from "../Bookmarks/BookmarksIndex";
import BookmarkPhoto from "../Bookmarks/BookmarkPhoto";
import BookmarkVideo from "../Bookmarks/BookmarkVideo";
import ModelViewProfile from "../Model/ModelViewProfile";
import FollowingIndex from "../Accounts/Following/FollowingIndex";
import ListIndex from "../Accounts/List/ListIndex";
import NotificationIndex from "../Notification/NotificationIndex";

const history = createHistory();
const $ = window.$;

const AppRoute = ({
  component: Component,
  layout: Layout,
  screenProps: ScreenProps,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout screenProps={ScreenProps} {...props}>
        <Component {...props} />
      </Layout>
    )}
    isAuthed
  />
);

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  screenProps: ScreenProps,
  authentication,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authentication === true ? (
        <Layout screenProps={ScreenProps}>
          <Component {...props} authRoute={true} />
        </Layout>
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    let userId = localStorage.getItem("userId");
    let accessToken = localStorage.getItem("accessToken");
    this.state = {
      loading: true,
      configLoading: true,
      authentication: userId && accessToken ? true : false,
    };

    history.listen((location, action) => {
      userId = localStorage.getItem("userId");

      accessToken = localStorage.getItem("accessToken");

      this.setState({
        loading: true,
        authentication: userId && accessToken ? true : false,
      });

      document.body.scrollTop = 0;
    });
  }

  render() {
    return (
      <>
        <Switch>
          <AppRoute
            path={"/"}
            component={LandingPageIndex}
            exact
            layout={AuthLayout}
          />

          <AppRoute
            path={"/home"}
            component={HomePageIndex}
            layout={MainLayout}
          />

          <AppRoute
            path={"/messages"}
            component={MessageIndex}
            layout={MainLayout}
          />

          <AppRoute
            path={"/bookmarks"}
            component={BookmarksIndex}
            layout={MainLayout}
          />

          <AppRoute
            path={"/bookmark-photo"}
            component={BookmarkPhoto}
            layout={MainLayout}
          />
          <AppRoute
            path={"/bookmark-video"}
            component={BookmarkVideo}
            layout={MainLayout}
          />

          <AppRoute
            path={"/model-profile"}
            component={ModelViewProfile}
            layout={MainLayout}
          />
          <AppRoute
            path={"/following"}
            component={FollowingIndex}
            layout={MainLayout}
          />

          <AppRoute path={"/list"} 
          component={ListIndex} 
          layout={MainLayout} 
          />

          <AppRoute
            path={"/edit-profile"}
            component={EditProfile}
            layout={MainLayout}
          />

          <AppRoute
            path={"/profile"}
            component={ProfileIndex}
            layout={MainLayout}
          />

          <AppRoute
            path={"/notification"}
            component={NotificationIndex}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/delete-account"}
            component={DeleteAccountIndex}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/change-password"}
            component={ChangePasswordIndex}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/edit-profile-loader"}
            component={LandingPageLoader}
            layout={MainLayout}
          />

          <Route path={"/login"} component={LoginIndex} />

          <Route path={"/signup"} component={RegisterIndex} />

          <Route path={"/forgot-password"} component={ForgotPassword} />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/cards"}
            component={CardsList}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/logout"}
            component={Logout}
            layout={MainLayout}
          />

          <Route path="*" component={NotFoundIndex} />
        </Switch>
      </>
    );
  }
}

export default App;
