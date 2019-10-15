import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import {
    getLeavePendingList,
} from "../../../redux/actions";

import {
    AdminLeaveTable,
} from "../../../containers/admin/AdminLeaveTable";

class LeavePendingList extends Component {

    componentDidMount(){
        this.props.getLeavePendingList();
    }

    render() {
        const {leaveItems, loading} = this.props.leaveListApp
        return (
            <Fragment>
                 <Row>
                    <Colxx xxs="12">
                        <Breadcrumb heading="menu.leave-request" match={this.props.match}/>
                        <Separator className="mb-5" />
                    </Colxx>
                </Row>
                {loading ? (
                <Row>
                    <Colxx xxs="12">
                        <AdminLeaveTable data={leaveItems} header="table.leave-pending-table" />
                    </Colxx>
                </Row>
                ) : (
                    <div className="loading" />
                )} 
            </Fragment>
        )
    }
}
const mapStateToProps = ({ leaveListApp }) => {
    return {
        leaveListApp
    };
};
export default injectIntl(
    connect(
        mapStateToProps,
        {
            getLeavePendingList
        }
    )(LeavePendingList)
);