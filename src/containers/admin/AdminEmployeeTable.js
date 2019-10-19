import React, { Component } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Form,
    Label,
    Input  
} from "reactstrap";
import { NavLink } from 'react-router-dom';

import {
  getUserTypeLeave,
} from "../../redux/actions";

class AdminEmployeeTable extends Component {
  constructor(props) {
      super(props);

      this.state = {
          modal :false,
          dataTableColumns : [
              {
                  Header: "ID",
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
                  Header: "Email",
                  accessor: "email",
                  Cell: props => <p className="list-item-heading">{props.value}</p>
              },
              {
                  Header: "Position",
                  accessor: "position",
                  Cell: props => <p className="list-item-heading">{props.value}</p>
              },
              {
                  Header: "Role",
                  accessor: "role",
                  Cell: props => <p className="list-item-heading" style={{textTransform: 'capitalize'}}>{props.value}</p>,
                  width: 100
              },
              {
                  Header: "Action",
                  accessor: 'employee_number',
                  Cell: props =>  <div>
                          <Button style={{textAlign:"right"}} color="success" size="xs" className="mb-2" title="Edit Employee">
                              <div className="glyph-icon simple-icon-pencil" />
                          </Button>
                          <Button style={{textAlign:"right"}} color="danger" size="xs" className="mb-2" title="Delete Employee">
                              <div className="glyph-icon simple-icon-trash" />
                          </Button>
                          {props.original.role !== "director" ? (
                          <Button style={{textAlign:"right"}} color="info" size="xs" className="mb-2" title="Edit Leave Balance" onClick={() => this.editLeaveBalance(props.value)}>
                              <IntlMessages id="button.leave-balance" />
                          </Button>
                          ) : ""}
                      </div>,
                  width: 200
              },
          ]
      };
  }

  editLeaveBalance(employeeID){
      this.props.getUserTypeLeave(employeeID)
      this.setState({
          modal: true,
      });
  };

  toggle = () => {
      this.setState(prevState => ({
          modal: !prevState.modal
      }));
  };

  render() {
      const { data,list }   = this.props;
      const { dataTableColumns,modal } = this.state;
      const { items } = this.props.userApp
      return (
          <Card className="mb-4">
              <CardBody>
                {list ? (
                  <NavLink exact to="/admin/employee/add">
                    <Button color="primary" size="md" className="mb-2" >
                      <span className="simple-icon-plus"></span> {" "}
                      <IntlMessages id="button.add-employee" />
                    </Button>
                  </NavLink>
                ) : (
                  <CardTitle>
                    <IntlMessages id="table.employee-table" />
                  </CardTitle>
                )} 
                <ReactTable
                  data={data}
                  columns={dataTableColumns}
                  defaultPageSize={list ? 10 : 5 }
                  showPageJump={true}
                  showPageSizeOptions={true}
                  PaginationComponent={DataTablePagination}
                  className={"react-table"}
                />
              </CardBody>
              {items !== null ? (
              <Modal
                isOpen={modal}
                wrapClassName="modal-right"
              >
                  <ModalHeader cssModule={{'modal-title': 'w-100'}}>
                      {/* <IntlMessages id={header} />  */}
                      Edit Leave Balance
                      <button style={{ marginLeft: "auto" }} className="close" data-dismiss="modal" onClick={this.toggle}>&times;</button>
                  </ModalHeader>
                  <ModalBody>
                    <Form>
                      {items.map((leave,i) =>
                        <FormGroup key={i}>
                          <Label for="exampleEmail">
                            {leave.type_name}
                          </Label>
                          <Input
                            type="number"
                            min="0.0"
                            step="0.5"
                            name={leave.id}
                            defaultValue={leave.leave_remaining}
                          />
                        </FormGroup>
                      )}
                    </Form>
                  </ModalBody>
                  <ModalFooter>
                      <Button color="primary" >
                        Update
                      </Button>
                      <Button color="secondary" onClick={this.toggle}>
                        Cancel
                      </Button>
                  </ModalFooter>
              </Modal>
              ) : ""} 
          </Card>
      );
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
  )(AdminEmployeeTable)
);