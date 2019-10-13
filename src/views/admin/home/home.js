import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, } from "../../../components/common/CustomBootstrap";

import {
    getEmployeeList,
} from "../../../redux/actions";

import {
    AdminEmployeeTable,
} from "../../../containers/admin/AdminEmployeeTable";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";

class HomeDashboard extends Component {

    componentDidMount(){
        this.props.getEmployeeList();
    }

    render() {
        const {employeeItems, loading} = this.props.employeeListApp
        const { messages } = this.props.intl;
        return (
            <Fragment>
                <Row>
                    <Colxx lg="4" md="6" className="mb-4">
                        <GradientWithRadialProgressCard
                        icon="iconsminds-clock"
                        title={`5 ${messages["dashboards.posts"]}`}
                        detail={messages["dashboards.pending-for-publish"]}
                        percent={(5 * 100) / 12}
                        progressText="5/12"
                        />
                    </Colxx>
                    <Colxx lg="4" md="6" className="mb-4">
                        <GradientWithRadialProgressCard
                        icon="iconsminds-male"
                        title={`4 ${messages["dashboards.users"]}`}
                        detail={messages["dashboards.on-approval-process"]}
                        percent={(4 * 100) / 6}
                        progressText="4/6"
                        />
                    </Colxx>
                    <Colxx lg="4" md="6" className="mb-4">
                        <GradientWithRadialProgressCard
                        icon="iconsminds-bell"
                        title={`8 ${messages["dashboards.alerts"]}`}
                        detail={messages["dashboards.waiting-for-notice"]}
                        percent={(8 * 100) / 10}
                        progressText="8/10"
                        />
                    </Colxx>
                </Row>
                {loading ? (
                <Row>
                    <Colxx xxs="12">
                        <AdminEmployeeTable data={employeeItems} />
                    </Colxx>
                </Row>
                ) : (
                    <div className="loading" />
                )} 
            </Fragment>
        )
    }
}
const mapStateToProps = ({ employeeListApp }) => {
    return {
        employeeListApp
    };
};
export default injectIntl(
    connect(
        mapStateToProps,
        {
            getEmployeeList
        }
    )(HomeDashboard)
);