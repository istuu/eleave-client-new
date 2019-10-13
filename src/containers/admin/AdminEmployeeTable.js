import React from "react";
import ReactTable from "react-table";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";
import {
    Button,
    NavLink,
    Card,
    CardBody,
    CardTitle
} from "reactstrap";
import { NavLink as RRNavLink } from 'react-router-dom';
const dataTableColumns = [
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
                <Button style={{textAlign:"right"}} color="info" size="xs" className="mb-2" title="Delete Employee">
                    <IntlMessages id="button.leave-balance" />
                </Button>
            </div>,
        width: 200
    },
];

export const AdminEmployeeTable = ({props,data,list = false}) => {
  return (
    <Card className="mb-4">
      <CardBody>
        {list ? (
           <NavLink tag={RRNavLink} exact to="/admin/employee/add">
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
    </Card>
  );
};
