import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import {
    getEmployeeList,
} from "../../../redux/actions";

import {
    AdminEmployeeTable,
} from "../../../containers/admin/AdminEmployeeTable";

class EmployeeList extends Component {

    componentDidMount(){
        this.props.getEmployeeList();
    }

    render() {
        const {employeeItems, loading} = this.props.employeeListApp
        return (
            <Fragment>
                 <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.employee" match={this.props.match}/>
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                {loading ? (
                <Row>
                    <Colxx xxs="12">
                        <AdminEmployeeTable data={employeeItems} list={true} />
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
    )(EmployeeList)
);