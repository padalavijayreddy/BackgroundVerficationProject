import {Component} from 'react'
import './index.css'

class EmploymentDetailsForm extends Component {
  state = {
    organizationNameInput: '',
    employeeIDInput: '',
    jobTitleInput: '',
    dateOfJoining: '',
    dateOfLeaving: '',
    grossAnnualCTCInput: '',
  }

  // #region - onchangeHandlers

  onChangeOrganizationNameInput = event => {
    this.setState({organizationNameInput: event.target.value})
  }

  onChangeEmployeeIDInput = event => {
    this.setState({employeeIDInput: event.target.value})
  }

  onChangeJobTitleInput = event => {
    this.setState({jobTitleInput: event.target.value})
  }

  onChangeDateOfJoining = event => {
    this.setState({dateOfJoining: event.target.value})
  }

  onChangeDateOfLeaving = event => {
    this.setState({dateOfLeaving: event.target.value})
  }

  onChangeGrossAnnualCTCInput = event => {
    this.setState({grossAnnualCTCInput: event.target.value})
  }

  // #endregion

  onSubmitForm = () => {}

  // #region - renderMethods

  renderGrossAnnualCTC = () => {
    const {grossAnnualCTCInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="grossCTC">
          Gross Annual CTC:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="grossCTC"
          type="text"
          required="required"
          value={grossAnnualCTCInput}
          placeholder="Enter the Gross Annual CTC:"
          onChange={this.onChangeGrossAnnualCTCInput}
        />
      </div>
    )
  }

  renderDateOfLeaving = () => {
    const {dateOfLeaving} = this.state

    return (
      <div className="form-group date-of-leaving">
        <label className="label-text" htmlFor="dateOfLeaving">
          Date of Leaving:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="dateOfLeaving"
          type="date"
          required="required"
          value={dateOfLeaving}
          placeholder="Enter the Date of Leaving"
          onChange={this.onChangeDateOfLeaving}
        />
      </div>
    )
  }

  renderDateOfJoining = () => {
    const {dateOfJoining} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="dateOfJoining">
          Date of Joining:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="dateOfJoining"
          type="date"
          required="required"
          value={dateOfJoining}
          placeholder="Enter the Date of Joining"
          onChange={this.onChangeDateOfJoining}
        />
      </div>
    )
  }

  renderJobTitle = () => {
    const {jobTitleInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="jobTitle">
          Job Title:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="jobTitle"
          type="text"
          required="required"
          value={jobTitleInput}
          placeholder="Enter the Job Title"
          onChange={this.onChangeJobTitleInput}
        />
      </div>
    )
  }

  renderEmployeeID = () => {
    const {employeeIDInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="employeeId">
          Employee ID:
        </label>
        <input
          className="form-control"
          id="employeeId"
          type="text"
          required="required"
          value={employeeIDInput}
          placeholder="Enter the Employee ID"
          onChange={this.onChangeEmployeeIDInput}
        />
      </div>
    )
  }

  renderOrganizationName = () => {
    const {organizationNameInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="organization">
          Name of the Organization:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="organization"
          type="text"
          placeholder="Enter the Organization"
          required="required"
          value={organizationNameInput}
          onChange={this.onChangeOrganizationNameInput}
        />
      </div>
    )
  }

  // #endregion

  render() {
    return (
      <div className="formContainer">
        <h1 className="header-text">EMPLOYMENT DETAILS</h1>
        <hr color="#edf1f2" />
        <div className="form-container">
          <fieldset className="field-set">
            <legend className="header-text-employment">EMPLOYMENT 1:</legend>
            <form className="basic-form" onSubmit={this.onSubmitForm}>
              {this.renderOrganizationName()}
              {this.renderEmployeeID()}
              {this.renderJobTitle()}
              <div style={{display: 'flex'}}>
                {this.renderDateOfJoining()}
                {this.renderDateOfLeaving()}
              </div>
              {this.renderGrossAnnualCTC()}
            </form>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default EmploymentDetailsForm
