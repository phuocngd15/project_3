// -- React and related libs
import React from "react";
import {connect} from "react-redux";
import {Switch, Route, withRouter, Redirect} from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs";
import Dashboard from "../../pages/dashboard/Dashboard";
import ActionManagement from "../../pages/action_management_tab/ActionManagement";
import Notifications from "../../pages/notifications/Notifications";
import Charts from "../../pages/uielements/charts/Charts";
import Icons from "../../pages/uielements/icons/IconsPage";
import Maps from "../../pages/uielements/maps/google/GoogleMapPage";

// -- Component Styles
import s from "./Layout.module.scss";
import ActionsLabelingPage from "../../pages/action_labeling/ActionsLabelingPage";
import {ModelManagement} from "../../pages/model_management_tab/ModelManagement";
import {ModelConfiguration} from "../../pages/model_config/ModelConfiguration";
import {VideoAnalytics} from "../../pages/video_analytics/VideoAnalytics";

const Layout = props => {
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <Header/>
                <Sidebar/>
                <main className={s.content}>
                    <Breadcrumbs url={props.location.pathname}/>
                    <Switch>
                        <Route path="/ACTIONS MANAGEMENT" exact component={ActionManagement}/>
                        <Route path="/ACTIONS MANAGEMENT/ACTIONS LABELING" exact component={ActionsLabelingPage}/>
                        {/* <Route path="/template" exact render={() => <Redirect to="template/dashboard"/>} /> */}
                        <Route path="/dashboard" exact component={Dashboard}/>
                        <Route path="/MODEL MANAGEMENT" exact component={ModelManagement}/>
                        <Route path="/MODEL MANAGEMENT/MODEL CONFIGURATION" exact component={ModelConfiguration}/>
                        <Route path="/VIDEO ANALYTICS" exact component={VideoAnalytics}/>
                       {/* <Route path="/notifications" exact component={Notifications}/>
                        <Route
                            path="/ui-elements"
                            exact
                            render={() => <Redirect to={"/ui-elements/charts"}/>}
                        />*/}
                        <Route path="/ui-elements/charts" exact component={Charts}/>
                        <Route path="/ui-elements/icons" exact component={Icons}/>
                        <Route path="/ui-elements/maps" exact component={Maps}/>
                        <Route path="*" exact render={() => <Redirect to="/error"/>}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

Layout.propTypes = {
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
    return {
        sidebarOpened: store.navigation.sidebarOpened
    };
}

export default withRouter(connect(mapStateToProps)(Layout));
