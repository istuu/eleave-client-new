import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";

// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, } from "../../../components/common/CustomBootstrap";

import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";

class HomeDashboard extends Component {

    componentDidMount(){
        
    }

    render() {
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
                
            </Fragment>
        )
    }
}
const mapStateToProps = ({ employeeListApp }) => {
    return {
    };
};
export default injectIntl(
    connect(
        mapStateToProps,
        {
        }
    )(HomeDashboard)
);