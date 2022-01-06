import {Component} from 'react'
import './index.css'

class BasicDetailsForm extends Component {
  state = {
    emailAddressInput: '',
    fullNameInput: '',
    fatherNameInput: '',
    phoneNumberInput: '',
    maritalStatus: '',
  }

  onChangeEmailAddressInput = event => {
    this.setState({emailAddressInput: event.target.value})
  }

  onChangeFullNameInput = event => {
    this.setState({fullNameInput: event.target.value})
  }

  onChangeFatherNameInput = event => {
    this.setState({fatherNameInput: event.target.value})
  }

  onChangePhoneNumberInput = event => {
    this.setState({phoneNumberInput: event.target.value})
  }

  onChangeMaritalStatusInput = event => {
    this.setState({maritalStatus: event.target.value})
  }

  onSubmitForm = () => {
    const {maritalStatus} = this.state
    console.log(maritalStatus)
  }

  renderRadioButtons = () => {
    const {maritalStatus} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="radio-buttons-label">
          Marital Status:
        </label>
        <br />
        <div className="radio-buttons">
          <div className="each-radio">
            <label className="label-text-radio">
              <input
                className="radio-input"
                type="radio"
                value="Married"
                checked={maritalStatus === 'Married'}
                onChange={this.onChangeMaritalStatusInput}
              />
              Married
            </label>
          </div>
          <br />
          <div className="each-radio">
            <label className="label-text-radio">
              <input
                className="radio-input"
                type="radio"
                value="Unmarried"
                checked={maritalStatus === 'Unmarried'}
                onChange={this.onChangeMaritalStatusInput}
              />
              Unmarried
            </label>
          </div>
          <br />
          <div className="each-radio">
            <label className="label-text-radio">
              <input
                className="radio-input"
                type="radio"
                value="Other"
                checked={maritalStatus === 'Other'}
                onChange={this.onChangeMaritalStatusInput}
              />
              Other
            </label>
          </div>
        </div>
      </div>
    )
  }

  renderPhoneNumber = () => {
    const {phoneNumberInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="contactNumber">
          Contact Number:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="contactNumber"
          type="number"
          pattern="^[1-9]\d{9}$"
          required="required"
          value={phoneNumberInput}
          placeholder="Enter the Contact Number"
          onChange={this.onChangePhoneNumberInput}
        />
      </div>
    )
  }

  renderFatherName = () => {
    const {fatherNameInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="fatherName">
          Father/Husband&apos;s Name (As per PAN/ Aadhaar Card):
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="fatherName"
          type="text"
          required="required"
          value={fatherNameInput}
          placeholder="Enter the Father/Husband Name"
          onChange={this.onChangeFatherNameInput}
        />
      </div>
    )
  }

  renderFullName = () => {
    const {fullNameInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="fullName">
          Full Name (As per PAN/ Aadhaar Card):
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="fullName"
          type="text"
          required="required"
          value={fullNameInput}
          placeholder="Enter the Full Name"
          onChange={this.onChangeFullNameInput}
        />
      </div>
    )
  }

  renderEmailAddress = () => {
    const {emailAddressInput} = this.state

    return (
      <div className="form-group">
        <label className="label-text" htmlFor="email">
          Personal Email:
          <span className="text-danger">*</span>
        </label>
        <input
          className="form-control"
          id="email"
          type="email"
          placeholder="Enter the Email Address"
          required="required"
          value={emailAddressInput}
          onChange={this.onChangeEmailAddressInput}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="formContainer">
        <h1 className="header-text">BASIC DETAILS</h1>
        <hr color="#edf1f2" />
        <form className="basic-form" onSubmit={this.onSubmitForm}>
          {this.renderEmailAddress()}
          {this.renderFullName()}
          {this.renderFatherName()}
          {this.renderPhoneNumber()}
          {this.renderRadioButtons()}
        </form>
      </div>
    )
  }
}

export default BasicDetailsForm
