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

  onChangeEmailAddressInput = () => {}

  onChangeFullNameInput = () => {}

  onChangeFatherNameInput = () => {}

  onChangePhoneNumberInput = () => {}

  onChangeMaritalStatusInput = () => {}

  render() {
    const {
      emailAddressInput,
      fullNameInput,
      fatherNameInput,
      phoneNumberInput,
      maritalStatus,
    } = this.state
    return (
      <div className="formContainer">
        <h1 className="header-text">BASIC DETAILS</h1>
        <hr color="#edf1f2" />
        <form className="basic-form" onSubmit={this.onSubmitForm}>
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
            />
          </div>
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
            />
          </div>
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
            />
          </div>
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
            />
          </div>
          <div className="form-group">
            <label className="label-text" htmlFor="contactNumber">
              Marital Status:
              <span className="text-danger">*</span>
            </label>
            <div className="radio">
              <label className="i-checks">
                <input
                  id="married"
                  type="radio"
                  name="maritalStatus"
                  value={maritalStatus}
                  className="ng-pristine ng-untouched ng-valid ng-not-empty"
                />
                <i />
                Married
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default BasicDetailsForm
