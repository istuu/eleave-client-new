import React from "react";
import ReactTable from "react-table";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";
import {
    Button,
    Card,
    CardBody,
    CardTitle
} from "reactstrap";
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
                    <IntlMessages id="Leave Balance" />
                </Button>
            </div>,
        width: 200
    },
];

export const AdminEmployeeData = ({props,data}) => {
  return (
    <Card className="mb-4">
      <CardBody>
        <CardTitle>
          <IntlMessages id="table.react-pagination" />
        </CardTitle>
        <ReactTable
          data={data}
          columns={dataTableColumns}
          defaultPageSize={5}
          showPageJump={true}
          showPageSizeOptions={true}
          PaginationComponent={DataTablePagination}
          className={"react-table"}
        />
      </CardBody>
    </Card>
  );
};
