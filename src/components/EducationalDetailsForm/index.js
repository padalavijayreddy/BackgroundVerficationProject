import {Component} from 'react'
import './index.css'

class EducationalDetailsForm extends Component {
  state = {
    educationObtainedInput: '',
    startYear: '',
    endYear: '',
    rollNumber: '',
    collegeAddressInput: '',
  }

  // #region - onchangeHandlers

  onChangeEducationObtainedInput = event => {
    this.setState({educationObtainedInput: event.target.value})
  }

  onChangeStartYear = event => {
    this.setState({startYear: event.target.value})
  }

  onChangeEndYear = event => {
    this.setState({endYear: event.target.value})
  }

  onChangeRollNumber = event => {
    this.setState({rollNumber: event.target.value})
  }

  onChangeCollegeAddressInput = event => {
    this.setState({collegeAddressInput: event.target.value})
  }

  // #endregion

  onSubmitForm = () => {}

  // #region - renderMethods

  renderCollegeAddressInput = () => {
    const {collegeAddressInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="collegeAddress">
          Name & Address of School/College/Institute:
        </label>
        <textarea
          className="text-area"
          id="collegeAddress"
          rows="4"
          cols="50"
          placeholder="Enter college address..."
          required="required"
          value={collegeAddressInput}
          onChange={this.onChangeCollegeAddressInput}
        />
      </div>
    )
  }

  renderRollNumber = () => {
    const {rollNumber} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="rollNumber">
          Roll Number:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="rollNumber"
          type="text"
          required="required"
          value={rollNumber}
          placeholder="Enter the Role Number"
          onChange={this.onChangeRollNumber}
        />
      </div>
    )
  }

  renderEndYear = () => {
    const {endYear} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="endYear">
          End Year
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control year"
          id="endYear"
          type="number"
          min="1900"
          max="2099"
          step="1"
          value={endYear}
          placeholder="Enter the End Year"
          onChange={this.onChangeEndYear}
        />
      </div>
    )
  }

  renderStartYear = () => {
    const {startYear} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="startYear">
          Start Year
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control year"
          id="startYear"
          type="number"
          min="1900"
          max="2099"
          step="1"
          value={startYear}
          placeholder="Enter the Start Year"
          onChange={this.onChangeStartYear}
        />
      </div>
    )
  }

  renderEducationObtained = () => {
    const {educationObtainedInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="organization">
          Education Obtained:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="organization"
          type="text"
          placeholder="Enter the Organization"
          required="required"
          value={educationObtainedInput}
          onChange={this.onChangeEducationObtainedInput}
        />
      </div>
    )
  }

  // #endregion

  render() {
    return (
      <div className="formContainer">
        <h1 className="header-text">EDUCATIONAL DETAILS</h1>
        <hr color="#edf1f2" />
        <div className="form-container">
          <fieldset className="field-set">
            <legend className="header-text-employment">EDUCATION 1:</legend>
            <form className="basic-form" onSubmit={this.onSubmitForm}>
              {this.renderEducationObtained()}
              {this.renderStartYear()}
              {this.renderEndYear()}
              {this.renderRollNumber()}
              {this.renderCollegeAddressInput()}
            </form>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default EducationalDetailsForm
