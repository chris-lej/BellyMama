import React from 'react';
import {Form, Formik, Field, ErrorMessage} from 'formik';
import { connect } from "react-redux";
import { getBusinesses } from "../../actions";
import * as Yup from 'yup';
import { Button } from 'reactstrap'

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(getBusinesses(category))
});

class SearchBar extends React.Component {
  render = () => (
    <Formik
      initialValues={{ serviceDropdown: '' }}
      validationSchema={Yup.object({
        serviceDropdown: Yup.string()
          .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        this.props.getData(values.serviceDropdown);
        setSubmitting(false);
      }}
    >
      <div className="col mt-2" id="search-form">
        <Form>
          <div className="form-group">
            <div className="row">
              <div className="col-10">
                <Field
                  name="serviceDropdown"
                  as="select"
                  className="form-control"
                >
                  <option value="">Select a Value</option>
                  <option value='prenatal-yoga'>PreNatal Yoga</option>
                </Field>
                <ErrorMessage
                  name="serviceDropdown"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-2">
                <Button
                  type="submit"
                  color="primary"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default connect(null, mapDispatchToProps)(SearchBar)
