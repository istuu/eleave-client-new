import React, { Component } from "react";
import ReactTable from "react-table";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";
import {
    Button,
    Table,
    Card,
    CardBody,
    CardTitle,
    Modal,
    ModalBody,
    ModalHeader,
} from "reactstrap";


export class AdminLeaveTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal :false,
            detail: null,
            dataTableColumns:[
                {
                    Header: "Request ID",
                    accessor: "id",
                    Cell: props => <p className="list-item-heading">{props.value}</p>,
                    width: 100
                },
                {
                    Header: "Employee ID",
                    accessor: "employee_number",
                    Cell: props => <p className="list-item-heading">{props.value}</p>,
                    width: 100
                },
                {
                    Header: "Name",
                    accessor: "name",
                    Cell: props => <p className="list-item-heading">{props.value}</p>
                },
                { 
                    Header: "Position",
                    accessor: "position",
                    Cell: props => <p className="list-item-heading">{props.value}</p>,
                },
                {
                    Header: "Email",
                    accessor: "email",
                    Cell: props => <p className="list-item-heading">{props.value}</p>,
                },
                {
                    Header: "Type of Leave",
                    accessor: "type_name",
                    Cell: props => <p className="list-item-heading">{props.value}</p>,
                    width: 100
                },
                {
                    Header: "From",
                    accessor: "date_from",
                    Cell: props => <p className="list-item-heading">{props.value}</p>,
                    width: 100
                },
                {
                    Header: "To",
                    accessor: "date_to",
                    Cell: props => <p className="list-item-heading">{props.value}</p>,
                    width: 100
                },
                {
                    Header: "Action",
                    accessor: 'employee_number',
                    Cell: props =>  <div style={{textAlign:"right"}}>
                            <Button color="info" size="xs" className="mb-2" title="Detail Leave Request" onClick={() => this.showDetail(props.original)}>
                                <div className="glyph-icon simple-icon-eye" />
                            </Button>
                            <Button color="danger" size="xs" className="mb-2" title="Delete Leave Request">
                                <div className="glyph-icon simple-icon-trash" />
                            </Button>
                        </div>,
                    width: 100
                },
            ]
        };
    }

    showDetail(props){
        this.setState({
            modal: true,
            detail: props
        });
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        const { data,header }   = this.props;
        const { dataTableColumns,modal,detail }   = this.state;
        console.log(detail)
        return (
            <Card className="mb-4">
                <CardBody>
                    <CardTitle>
                        <IntlMessages id={header} />
                    </CardTitle>
                    <ReactTable
                        data={data}
                        columns={dataTableColumns}
                        defaultPageSize={10}
                        showPageJump={true}
                        showPageSizeOptions={true}
                        PaginationComponent={DataTablePagination}
                        className={"react-table"}
                    />
                </CardBody>
                {detail !== null ? (
                <Modal isOpen={modal}>
                    <ModalHeader cssModule={{'modal-title': 'w-100'}}>
                        <IntlMessages id={header} /> 
                        <button style={{ marginLeft: "auto" }} className="close" data-dismiss="modal" onClick={this.toggle}>&times;</button>
                    </ModalHeader>
                    <ModalBody>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <th scope="row">ID</th>
                                    <td>{detail.id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{detail.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{detail.email}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Type of Leave</th>
                                    <td>{detail.type_name}</td>
                                </tr>
                                {detail.notes !== "" ? (
                                <tr>
                                    <th scope="row">Reason</th>
                                    <td>{detail.reason}</td>
                                </tr>
                                ) : ""}
                                <tr>
                                    <th scope="row">From</th>
                                    <td>{detail.date_from}</td>
                                </tr>
                                <tr>
                                    <th scope="row">To</th>
                                    <td>{detail.date_to}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Half Date</th>
                                    <td>{detail.half_dates}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Total Leave</th>
                                    <td>{detail.total}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Leave Balance</th>
                                    <td>{detail.leave_remaining}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Contact Address</th>
                                    <td>{detail.contact_address}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Contact Number</th>
                                    <td>{detail.contact_number}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Status</th>
                                    <td>{detail.status}</td>
                                </tr>
                                {detail.notes !== "" ? (
                                <tr>
                                    <th scope="row">Notes</th>
                                    <td>{detail.notes}</td>
                                </tr>
                                ) : "" }
                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
                ) : ""} 
            </Card>
        );
    }
}
