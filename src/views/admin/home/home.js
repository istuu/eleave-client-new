import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, } from "../../../components/common/CustomBootstrap";

import {
    getEmployeeList,
} from "../../../redux/actions";

import {
    AdminEmployeeData,
} from "../../../containers/admin/AdminEmployeeData";

class HomeDashboard extends Component {

    componentDidMount(){
        this.props.getEmployeeList();
    }

    render() {
        const {employeeItems, loading} = this.props.employeeListApp
        console.log(this.props)
        return (
            <Fragment>
                {loading ? (
                <Row>
                    <Colxx xxs="12">
                        <h3 className="mb-4">
                        <IntlMessages id="table.react-tables" />
                        </h3>
                    </Colxx>
                    <Colxx xxs="12">
                        <AdminEmployeeData data={employeeItems} />
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