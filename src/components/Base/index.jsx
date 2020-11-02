import React, { Component } from "react";
import { createBrowserHistory as createHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
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
import FollowingIndex from "../Accounts/FansFollowing/Following/FollowingIndex";
import ListIndex from "../Accounts/List/ListIndex";
import NotificationIndex from "../Notification/NotificationIndex";
import CreatePostIndex from "../Post/CreatePost/CreatePostIndex";
import FavoritesIndex from "../Accounts/Favorites/FavoritesIndex";
import PaymentsIndex from "../Accounts/Payments/PaymentsIndex";
import BankingIndex from "../Accounts/Payments/BankingIndex";
import CardListIndex from "../Accounts/Payments/CardListIndex";
import AddBankIndex from "../Accounts/Payments/AddBankIndex";
import Logout from "../Accounts/Logout";
import Wallet from "../Wallet/Wallet";

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
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
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
            path={"/create-post"}
            component={CreatePostIndex}
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
          <AppRoute
            path={"/fans"}
            component={FollowingIndex}
            layout={MainLayout}
          />
          <AppRoute
            path={"/favorites"}
            component={FavoritesIndex}
            layout={MainLayout}
          />

          <AppRoute path={"/list"} component={ListIndex} layout={MainLayout} />

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

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/payments"}
            component={PaymentsIndex}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/banking"}
            component={BankingIndex}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/card-list"}
            component={CardListIndex}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/add-bank"}
            component={AddBankIndex}
            layout={MainLayout}
          />

          <PrivateRoute
            authentication={this.state.authentication}
            path={"/wallet"}
            component={Wallet}
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
