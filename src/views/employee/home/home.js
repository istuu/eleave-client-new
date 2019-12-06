import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, } from "../../../components/common/CustomBootstrap";

import {
    getUserTypeLeave,
} from "../../../redux/actions";

import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
import EmployeeSummary from "../../../containers/employee/EmployeeSummary";

class HomeDashboard extends Component {

    componentDidMount(){
        let employeeID = localStorage.getItem('user_id')
        this.props.getUserTypeLeave(employeeID);
    }

    mappingLeaveBalance(type_id) {
        if(type_id === "11") return 12;
        else if(type_id === "22") return 3;
        else if(type_id === "33") return 30;
        else if(type_id === "44") return 2;
        else if(type_id === "55") return 90;
        else return 2;
    }

    mappingIconTypeLeave(type_id) {
        if(type_id === "11") return "simple-icon-calendar";
        else if (type_id === "22") return "simple-icon-fire";
        else if (type_id === "33") return "iconsminds-stethoscope";
        else if (type_id === "44") return "simple-icon-heart";
        else if (type_id === "55") return "iconsminds-baby-clothes";
        else return "simple-icon-briefcase";
    }

    render() {
        const {items, loading} = this.props.userApp
        return (
            <Fragment>
                <Row>
                    <Colxx lg="6" md="6" className="mb-4 pull-left">
                        {loading ? (
                            <EmployeeSummary items={items} cardClass="dashboard-progress"/>
                        ) : (
                            <div className="loading" />
                        )}
                    </Colxx>
                
                    <Colxx lg="6" md="6" className="mb-4 pull-right">
                        {loading ? (
                            <Row>
                                {items.map((item, key) =>
                                    <Colxx key={key} lg="6" md="4" className="mb-4">
                                        <GradientWithRadialProgressCard
                                            icon={this.mappingIconTypeLeave(item.type_id)}
                                            title={item.type_name}
                                            detail=""
                                            percent={item.leave_remaining/this.mappingLeaveBalance(item.type_id)*100}
                                            progressText={(item.leave_remaining === 0 ? "0 " : item.leave_remaining) + " / " + this.mappingLeaveBalance(item.type_id)}
                                        />
                                    </Colxx>
                                )}
                            </Row>
                            ) : (
                                <div className="loading" />
                            )} 
                    </Colxx>
                </Row>
            </Fragment>
        )
    }
}
const mapStateToProps = ({ userApp }) => {
    return {
        userApp
    };
};
export default injectIntl(
    connect(
        mapStateToProps,
        {
            getUserTypeLeave
        }
    )(HomeDashboard)
);