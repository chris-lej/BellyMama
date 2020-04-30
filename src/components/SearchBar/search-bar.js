import React from 'react';
import {
  Form,
  Formik,
  Field
} from 'formik';
import { connect } from "react-redux";
import Actions from "../../actions";
import * as Yup from 'yup';
import { Button } from 'reactstrap'
import './search-bar.css'

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(Actions.getBusinesses(category))
});

class SearchBar extends React.Component {
  render = () => (
    <div className='d-flex d-flex-row'>
      {
        this.props.navBar &&
        <div className="search-title">I am looking for</div>
      }
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
        <div className="mt-2 mx-2" id="search-form">
          <Form>
            <div className="form-group">
              <div className="d-flex">
                <div>
                  <Field
                    name="serviceDropdown"
                    as="select"
                    className="form-control"
                  >
                    <option value="">Choose your service</option>
                    <option value='prenatal-yoga'>PreNatal Yoga</option>
                    <option value='prenatal-massage'>PreNatal Massage</option>
                  </Field>
                </div>
                {
                  this.props.navBar &&
                  <div className="search-city">in Austin, TX.</div>
                }
                <div>
                  <Button
                    type="submit"
                    className="submit-button ml-3"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(SearchBar)
