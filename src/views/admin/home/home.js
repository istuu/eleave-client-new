import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, } from "../../../components/common/CustomBootstrap";

import {
    getEmployeeList,
} from "../../../redux/actions";

import AdminEmployeeTable from "../../../containers/admin/AdminEmployeeTable";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";

class HomeDashboard extends Component {

    componentDidMount(){
        this.props.getEmployeeList();
    }

    render() {
        const {employeeItems, loading} = this.props.employeeListApp
        // const { messages } = this.props.intl;
        return (
            <Fragment>
                <Row>
                    <Colxx lg="4" md="6" className="mb-4">
                        <GradientWithRadialProgressCard
                        icon="iconsminds-male-female"
                        title="Employees"
                        detail="Number of registered users"
                        percent={100}
                        progressText="16"
                        />
                    </Colxx>
                    <Colxx lg="4" md="6" className="mb-4">
                        <GradientWithRadialProgressCard
                        icon="iconsminds-check"
                        title="Approved Leave"
                        detail="Total of approved leave request"
                        percent={100}
                        progressText="15"
                        />
                    </Colxx>
                    <Colxx lg="4" md="6" className="mb-4">
                        <GradientWithRadialProgressCard
                        icon="iconsminds-clock"
                        title="Pending Leave"
                        detail="Total of pending leave request"
                        percent={100}
                        progressText="5"
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