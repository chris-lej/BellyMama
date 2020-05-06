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
import Selectors from '../../selectors'
import './search-bar.css'

const mapStateToProps = (state) => ({
  currentSearchCategory: Selectors.currentSearchCategory(state)
});

const mapDispatchToProps = (dispatch) => ({
  getData: (category) => dispatch(Actions.getBusinesses(category))
});

class SearchBar extends React.Component {

  allCategories = [
    {
      value: 'prenatal-yoga',
      readableValue: 'PreNatal Yoga'
    },
    {
      value: 'prenatal-massage',
      readableValue: 'PreNatal Massage'
    },
    {
      value: 'doulas',
      readableValue: 'Doulas'
    }
  ];

  currentCategoryName = (currentCategory) => currentCategory === 'initial-value' ? {readableValue: 'Banana'} : this.allCategories
      .find((category) => category.value === currentCategory)

  remainingCategories = (currentCategory) => this.allCategories
    .filter((category) => !(category.value === currentCategory))

  render = () => {
    console.log('Current', this.currentCategoryName(this.props.currentSearchCategory))
    console.log('Remaining', this.remainingCategories(this.props.currentSearchCategory)
      .filter((category) => !(category.value === 'initial-category'))
    )

    return (
    <div className={`d-flex d-flex-row ${this.props.navBar && 'search-for-nav'}`}>
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
                    <option value="">
                      {this.currentCategoryName(this.props.currentSearchCategory).readableValue}
                    </option>
                    {
                      this.remainingCategories(this.props.currentSearchCategory)
                        .sort()
                        .map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.readableValue}
                          </option>
                        ))
                    }
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
  );}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
