import React, { Component } from "react";
import { Formik, Form, Field } from 'formik';

import {
    Row,
    Card,
    CardBody,
    FormGroup,
    Label,
    Button,
} from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";
import Select from "react-select";
import CustomSelectInput from "../../components/common/CustomSelectInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const selectData = [
    { label: "Male", value: "male", key: 0 },
    { label: "Female", value: "female", key: 1 }
  ];

class AdminEmployeeRegistration extends Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            selectedOptions: [],
            selectedOption: "",
            start_working_date:null
        };
    }

    handleSubmit(values) {
        console.log(values);
    }

    validate(values) {
        let errors = {};

        if (!values.email) {
            errors.email = 'Please enter your email address';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.name) {
            errors.name = 'Please enter your name';
        } else if (values.name === 'admin') {
            errors.name = 'Value must be longer than 2 characters';
        }
        return errors;
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    handleChangeDate = date => {
        this.setState({
            start_working_date: date
        });
    };

    render() {
        return (
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            <h6 className="mb-4">Register New Employee</h6>
                            <Formik
                                validate={this.validate}
                                initialValues={{
                                    employee_number:'',
                                    name:'',
                                    gender:'',
                                    position:'',
                                    start_working_date:'',
                                    mobile_phone:'',
                                    email:'',
                                    password:'',
                                    role:'',
                                }}
                                onSubmit={this.handleSubmit}>
                                {({ errors, touched, isValidating }) => (
                                    <Form className="av-tooltip tooltip-label-right">

                                        <FormGroup>
                                            <Label>
                                                Employee Number
                                            </Label>
                                            <Field className="form-control" name="employee_number" />
                                            {errors.employee_number && touched.employee_number && <div className="invalid-feedback d-block">{errors.employee_number}</div>}
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>
                                                Full Name
                                            </Label>
                                            <Field className="form-control" name="name" />
                                            {errors.name && touched.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>
                                                Email
                                            </Label>
                                            <Field className="form-control" name="email" />
                                            {errors.email && touched.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>
                                                Gender
                                            </Label>
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                name="form-field-name"
                                                value={this.state.selectedOption}
                                                onChange={this.handleChange}
                                                options={selectData}
                                            />
                                            {errors.gender && touched.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>
                                                Position
                                            </Label>
                                            <Field className="form-control" name="position" />
                                            {errors.position && touched.position && <div className="invalid-feedback d-block">{errors.position}</div>}
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>
                                                Start Working Date
                                            </Label>
                                            <DatePicker
                                                dateFormat="DD-MM-YYYY"
                                                selected={this.state.start_working_date}
                                                onChange={this.handleChangeDate}
                                                placeholderText="From date"
                                            />
                                            {errors.start_working_date && touched.start_working_date && <div className="invalid-feedback d-block">{errors.start_working_date}</div>}
                                        </FormGroup>

                                        <Button color="primary" type="submit">Submit</Button>
                                    </Form>
                                )}
                            </Formik>
                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        )
    }
}

export default AdminEmployeeRegistration;

