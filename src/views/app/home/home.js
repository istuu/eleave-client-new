import React, { Component, Fragment } from "react";
import { injectIntl } from "react-intl";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";

import { Colxx, } from "../../../components/common/CustomBootstrap";

import {
    AdminEmployeeData,
} from "../../../containers/admin/AdminEmployeeData";

class HomeDashboard extends Component {
    constructor() {
        super();
        this.state = {
            data : []
        }        
    }

    componentDidMount(){
        const urlFetch = fetch('http://35.197.155.131:8080/api/admin/user')
        urlFetch.then( res => {
            if(res.error !== null)
               return res.json()   
        }).then( resJson => {
            this.setState({
                data: resJson
            })
        })
    }

    render() {
        const tableData  = this.state.data.body;
        console.log(tableData)
        return (
            <Fragment>
                <Row>
                    <Colxx xxs="12">
                        <h3 className="mb-4">
                        <IntlMessages id="table.react-tables" />
                        </h3>
                    </Colxx>
                    <Colxx xxs="12">
                        <AdminEmployeeData data={tableData} />
                    </Colxx>
                </Row>
            </Fragment>
        )
    }
}
export default injectIntl(HomeDashboard);