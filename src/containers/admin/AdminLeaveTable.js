import React from "react";
import ReactTable from "react-table";
import IntlMessages from "../../helpers/IntlMessages";
import DataTablePagination from "../../components/DatatablePagination";
import {
    Button,
    // NavLink,
    Card,
    CardBody,
    CardTitle
} from "reactstrap";
const dataTableColumns = [
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
                <Button color="info" size="xs" className="mb-2" title="Detail Leave Request">
                    <div className="glyph-icon simple-icon-eye" />
                </Button>
                <Button color="danger" size="xs" className="mb-2" title="Delete Leave Request">
                    <div className="glyph-icon simple-icon-trash" />
                </Button>
            </div>,
        width: 100
    },
];

export const AdminLeaveTable = ({props,data, header}) => {
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
    </Card>
  );
};
