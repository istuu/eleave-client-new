import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import {
    getEmployeeList,
} from "../../../redux/actions";

import AdminEmployeeRegistration from "../../../containers/admin/AdminEmployeeRegistration";

class EmployeeList extends Component {

    componentDidMount(){
        this.props.getEmployeeList();
    }

    render() {
        return (
            <Fragment>
                 <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.employee" match={this.props.match}/>
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                <Colxx xs="12" md="6" className="mb-3">
                    <AdminEmployeeRegistration />
                </Colxx>
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
    )(EmployeeList)
);