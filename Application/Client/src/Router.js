import { BrowserRouter, Route, Switch } from "react-router-dom";
import UsersList from "./components/Admin/Actions/UsersList";
import Add from "./components/Admin/Actions/Add";
import AddAds from "./components/Admin/Actions/AddAds";
import DashboardAdmin from "./components/Admin/DashboardAdmin";
import AddArticles from "./components/Author/Actions/AddArticles";
import DashboardAuthor from "./components/Author/DashboardAuthor";
import ArticlesDetails from "./components/Home/ArticlesDetails";
import Home from "./components/Home/Home";
import Login from "./components/Home/login/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ArticlesList from "./components/Author/Actions/ArticlesList";
import UpdateUser from "./components/Admin/Actions/UpdateUser";
import MyAdsList from "./components/Admin/Actions/MyAdsList";
import AllAdsList from "./components/Admin/Actions/AllAdsList";
import UpdateAds from "./components/Admin/Actions/UpdateAds";
import ArticleManagement from "./components/Admin/Actions/ArticleManagement";
import ConfirmArticle from "./components/Admin/Actions/ConfirmArticle";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/ArticlesDetails" component={ArticlesDetails} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/DashboardAdmin" component={DashboardAdmin} />
        <Route exact path="/addUser" component={Add} />
        <Route exact path="/UsersList" component={UsersList} />
        <Route exact path="/addAds" component={AddAds} />
        <Route exact path="/DashboardAuthor" component={DashboardAuthor} />
        <Route exact path="/AddArticles" component={AddArticles} />
        <Route exact path="/ArticlesList" component={ArticlesList} />
        <Route exact path="/updateUser" component={UpdateUser} />
        <Route exact path="/myAdsList" component={MyAdsList} />
        <Route exact path="/allAdsList" component={AllAdsList} />
        <Route exact path="/updateAds" component={UpdateAds} />
        <Route exact path="/articleManagement" component={ArticleManagement} />
        <Route exact path="/confirmArticle" component={ConfirmArticle} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
